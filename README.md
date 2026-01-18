What needs to be installed for lip sync?

1) Node.js + npm
Node.js must be installed.

To check in the terminal:
node -v
npm -v


2) Start the frontend
In the frontend folder (for me it was called “th-mini”):

npm install
npm run dev

After that, the website runs locally via the Vite dev server.


3) Python for the TTS server
Python 3 must be installed (python3 works for me).

Check:
python3 --version

If this does not work, the TTS server will not work either.


4) Install Piper TTS
Piper is required as a Python module.

Installation:
pip install piper-tts

Check if it was installed correctly:
python3 -m piper --help


5) Start the TTS server
In the TTS server folder (for me: th-mini/tts):

npm install
node server.js

If everything works, the terminal should show:
TTS server on http://localhost:5179

The server must be running for the avatar to be able to speak.


Important
- The TTS server must be started before clicking “Avatar sprechen lassen” in the frontend.
- The avatar file must be located under /public/avatars/.


Optional (only if Piper does not work):
If there are errors when starting the TTS server (e.g. related to phonemization),
espeak-ng may need to be installed.

macOS:
brew install espeak-ng

Linux:
sudo apt install espeak-ng



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
