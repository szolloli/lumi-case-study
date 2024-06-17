# Feedback

Hello, there's no need for action on your side, these are just some notes before the interview so I don't forget :-)

- Overall nice, I like the UI

- I'd appreciate some readme instructions - how to run the project
- `lint` and `build` have unresolved issues 
- zustand not in the dependencies for some reason, I had to install it to be able to run the project
- Add Session -> Session name is pre-filled, but it requires me to change the string before submit -> UX challenging
- Can't expand the newly created sessions in the accordion

# Questions

- How did you like working with this stack? Have you used it before?
- Why zustand, what are the benefits, do you have experience using libs like this in projects?
- What would you do differently or/and what would you like to upgrade on your solution given more time?
- Is there anything in your code you would want to improve given more time?

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
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
