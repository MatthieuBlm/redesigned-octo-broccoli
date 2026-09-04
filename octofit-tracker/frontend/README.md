# OctoFit Tracker frontend

This React 19 presentation tier uses Vite and `react-router-dom` to display the API resources.

## Configuration

Define `VITE_CODESPACE_NAME` in `octofit-tracker/frontend/.env.local` with the Codespace name:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

The variable is recommended for a Codespaces deployment. When it is unset, the frontend derives the API URL from the current Codespaces hostname, for example `https://congenial-meme-44j5rrq9p6f7wqw-8000.app.github.dev` when the frontend is served from port `5173`. Outside Codespaces, it safely uses `http://localhost:8000` instead of building an `https://undefined-8000...` URL.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
