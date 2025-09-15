# Rick and Morty Explorer

> App web para explorar personajes y episodios de la serie Rick and Morty, desarrollada con React, TypeScript y Vite.

## 🚀 Características

- Búsqueda y paginado de personajes
- Cards visuales y responsivas
- Manejo de errores y carga
- Estilos modernos con CSS Modules
- Preparada para integración con IA (resúmenes de episodios)

## 🛠️ Tecnologías

- React
- TypeScript
- Vite
- CSS Modules

## 📦 Instalación

```bash
pnpm install
pnpm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la app.

## 📁 Estructura principal

- `/src/components` — Componentes reutilizables (Navbar, Card, Button, etc.)
- `/src/pages` — Vistas principales (Home, Characters, Episodes)
- `/src/hooks` — Hooks personalizados (useFetch, useDebounce, etc.)
- `/src/types` — Tipos e interfaces TypeScript

## ✨ Autor

Desarrollado por Juan

---

¡Pull requests y sugerencias son bienvenidas!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
## 🚀 Link 
  https://rick-and-morty-test1.netlify.app/
