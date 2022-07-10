# @vue-final/lib

A starter template of Vue 3 component library

You can easily publish your Vue 3 components or composable functions through this repo. Let you focus on development.

## Tech stacks

- pnpm
- monorepo
- typescript
- vue 3
- vite
- vitest
- @vueuse/core

## How to use

You can create your own library by following the steps below:

1. Click the [Use this template](https://github.com/vue-final/lib/generate) to create a new repository.

2. Right after you clone or copy the repo. you can use a special script to rename the lib to your own lib name.

```bash
pnpm i
pnpm lib:rename
# You will get a prompt that ask you enter the library name you want
# prompt: 
# Enter the library name you want (e.g: my-library-name):  
```

3. There are other built-in scripts in the repository.


```bash
# Start dev server and rebuild lib on change
pnpm dev
# Build lib
pnpm build
# Run unit test
pnpm test
# Run unit test and display test coverage
pnpm coverage
# Lint
pnpm lint
# Clean up all node_modules
pnpm clean
# Publish the lib in ./packages/lib/src/index.ts
pnpm lib:publish
# Run vue-tsc for each repo
pnpm typecheck
```