# Installation and Lip Sync Setup

This document describes the installation requirements and the file setup
needed to run the avatar with audio-based lip sync.

## Installation Requirements for Lip Sync

### 1) Node.js + npm

Node.js must be installed (recommended: LTS version).

Check in the terminal:
node -v
npm -v

### 2) Start the Frontend

In the frontend folder (for me it was called th-mini):

npm install
npm run dev

After that, the website runs locally via the Vite dev server.

### 3) Python for the TTS Server

Python 3 must be installed (python3 works for me).

Check:
python3 --version

If this does not work, the TTS server will not work either.

### 4) Install Piper TTS

Piper is required as a Python module.

Installation:
pip install piper-tts

Check if it was installed correctly:
python3 -m piper --help

### 5) Start the TTS Server

In the TTS server folder (for me: th-mini/tts):

npm install
node server.js

If everything works, the terminal should show:
TTS server on http://localhost:5179

The server must be running for the avatar to be able to speak.

### Important Notes

- The TTS server must be started before clicking “Avatar sprechen lassen” in the frontend.
- The avatar file must be located under /public/avatars/.

### Optional (only if Piper does not work)

If there are errors when starting the TTS server (e.g. related to phonemization),
espeak-ng may need to be installed.

macOS:
brew install espeak-ng

Linux:
sudo apt install espeak-ng

--------------------------------------------------
Lip Sync Setup (Avatar)
--------------------------------------------------

This project uses a 3D avatar with audio-based lip sync.
Below is an overview of what is required for lip sync and where each part belongs.

### 1) Avatar Model

Location:
public/avatars/

Required file:
- RosalindeFranklinWebsiteExport2.glb
  (or your own avatar .glb file)

The avatar must be placed in the public/avatars/ folder so it can be loaded via URL.

The avatar model must support morph targets / blendshapes for visemes.
If the avatar does not support visemes, lip sync will not work.

### 2) Character Component (Frontend)

Location:
src/components/Character/

Files:
- Character.tsx
- Character.css

This component:
- initializes the TalkingHead avatar
- loads the avatar model
- connects audio playback to HeadAudio
- applies viseme values to the avatar for lip sync

This is the main entry point for lip sync in the frontend.

### 3) TalkingHead Library

Location:
src/lib/

Important files:
- talkinghead.mjs
- lipsync-*.mjs
- dynamicbones.mjs

TalkingHead is responsible for rendering the avatar, playing audio,
and exposing morph targets used for lip sync.

### 4) HeadAudio (Lip Sync Processing)

Location:
src/headaudio/

Required files:
- headaudio.mjs
- headworklet.mjs
- model-en-mixed.bin

Additional helper files (must also be present):
- classifier.mjs
- processor.mjs
- mfcc.mjs
- vadgate.mjs
- ringbuffer.mjs
- parameters.mjs
- etc.

HeadAudio analyzes the speech audio and generates viseme values.
If model-en-mixed.bin is missing or not loading correctly,
the avatar mouth will not move.

### 5) TTS Server (Backend)

Location:
tts/

Files:
- tts-server.cjs
- package.json

The TTS server:
- runs on http://localhost:5179
- provides the endpoint /api/tts
- converts text into speech audio using Piper
- streams WAV audio back to the frontend

The TTS server must be running before triggering speech in the frontend.

### 6) Piper TTS (Python)

Location:
tts/piper/

Required files:
- de_DE-kerstin-low.onnx
- de_DE-kerstin-low.onnx.json

Piper is used to generate speech audio from text.
The voice model must exist locally and be referenced in tts-server.cjs.

### 7) Vite Proxy Configuration (Important)

Location:
vite.config.ts

Configuration:
export default {
  server: {
    proxy: {
      "/api": "http://localhost:5179",
    },
  },
};

This proxy forwards frontend requests from /api/*
to the local TTS server running on port 5179.

Because of this:
- the frontend can call /api/tts
- no CORS issues occur
- the frontend does not need to know the backend port directly

If the proxy is missing or incorrect, the TTS request will fail.

### 8) Runtime Flow (How Lip Sync Works)

1. The frontend sends text to /api/tts
2. The request is forwarded by the Vite proxy to the TTS server
3. The TTS server generates speech audio using Piper
4. The audio is streamed back to the frontend
5. TalkingHead plays the audio
6. HeadAudio analyzes the audio
7. Viseme values are applied to the avatar
8. The avatar mouth moves in sync with the speech

### Notes

- The TTS server must be running before triggering speech in the frontend.
- If audio plays but the mouth does not move, usually a HeadAudio file or model is missing.
- All HeadAudio files must be reachable by the browser (no 404 errors).



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
