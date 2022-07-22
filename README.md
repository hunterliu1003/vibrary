# Vibrary

A published-ready template for Vue 3 components and composable functions library.

- pnpm
- typescript
- vue 3
- vite
- vitest
- viteplay for documentation
- @vueuse/core

## Scaffolding Your First Vue 3 Library

With NPM:

```bash
$ npm create vibrary@latest
```

With Yarn:

```bash
$ yarn create vibrary
```

With PNPM:

```bash
$ pnpm create vibrary
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue library, run:

```bash
# npm 6.x
npm create vibrary@latest my-vue-library --template vue-ts

# npm 7+, extra double-dash is needed:
npm create vibrary@latest my-vue-library -- --template vue-ts

# yarn
yarn create vibrary my-vue-library -- --template vue-ts

# pnpm
pnpm create vibrary my-vue-library -- --template vue-ts
```

Currently supported template presets include:

- `vue-ts`
