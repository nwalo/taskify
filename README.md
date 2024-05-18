# Taskify

Taskify is a sleek and efficient task management application designed to streamline your daily activities and boost productivity. With Taskify, you can easily create, organize, and prioritize your tasks with a user-friendly interface.

## Key Features

- **Mark Tasks as Done**: Quickly mark tasks as completed with a simple click, helping you stay on top of your progress.
- **Drag and Drop**: Seamlessly reorder your tasks with intuitive drag-and-drop functionality, allowing you to prioritize your workflow effortlessly.

## Why Taskify?

Taskify is built with a focus on simplicity and functionality, making it the perfect tool for individuals and teams looking to enhance their task management process. Whether you're managing personal to-dos or collaborating on a project, Taskify provides a seamless experience that keeps you organized and focused.

## Getting Started

1. Clone the repository: `git clone https://github.com/yourusername/taskify.git`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

Stay organized, stay productive with Taskify.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
