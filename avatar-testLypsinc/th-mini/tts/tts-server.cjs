const express = require("express");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(cors());

const OUT_DIR = path.join(__dirname, "tts-out");
fs.mkdirSync(OUT_DIR, { recursive: true });

const MODEL = path.join(__dirname, "piper", "de_DE-kerstin-low.onnx");

app.post("/api/tts", (req, res) => {
  const text = String(req.body?.text ?? "").trim();
  if (!text) return res.status(400).json({ error: "missing text" });

  const outWav = path.join(
    OUT_DIR,
    `${Date.now()}-${Math.random().toString(36).slice(2)}.wav`
  );

  const p = spawn("python3", ["-m", "piper", "--model", MODEL, "--output_file", outWav], {
    stdio: ["pipe", "pipe", "pipe"],
  });

  p.stdin.write(text);
  p.stdin.end();

  let err = "";
  p.stderr.on("data", (d) => (err += d.toString()));

  p.on("close", (code) => {
    if (code !== 0) {
      console.error("piper failed:", err);
      return res.status(500).json({ error: "piper failed", code, details: err.slice(0, 300) });
    }

    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Cache-Control", "no-store");

    const stream = fs.createReadStream(outWav);
    stream.pipe(res);

    // Cleanup temporary audio file
    stream.on("end", () => fs.unlink(outWav, () => {}));
    res.on("close", () => fs.unlink(outWav, () => {}));
    stream.on("error", () => fs.unlink(outWav, () => {}));
    res.on("error", () => fs.unlink(outWav, () => {}));
  });
});

app.listen(5179, "0.0.0.0", () => {
  console.log("TTS server on http://localhost:5179");
});
