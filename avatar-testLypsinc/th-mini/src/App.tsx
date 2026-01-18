import Character from "./components/Character/Character";

export default function App() {
  // KI backend conection
  // const text = await fetch(...).then(r=>r.json()).then(x=>x.text)
  // window.avatarSpreche?.(text)

  return (
    <div style={{ padding: 20 }}>
      <Character />

      <button
        onClick={() =>
          window.avatarSpreche?.(
            "Hallo, ich bin Rosalind Franklin. Willkommen in unserem Projekt."
          )
        }
        style={{ marginTop: 12 }}
      >
        Avatar sprechen lassen
      </button>
    </div>
  );
}
