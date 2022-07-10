# vue-3-lib-template

A starter template for generating Vue 3 components or composable functions libraries.



This is a published-ready repo, let you build your own Vue 3 library immediately.

You can use `pnpm lib:rename` script to overwrite the lib name you want.
Then run `pnpm lib:publish` script to publish the lib.

## Tech stacks

- pnpm
- monorepo
- typescript
- vue 3
- vite
- vitest
- @vueuse/core

## How to use

You can create your own library by following these steps below:

1. Click the [Use this template](https://github.com/vue-final/lib/generate) to create a new repo or clone the repo

2. Right after you clone or copy the repo as a template. you can use a special script to rename the lib to your own lib name.

```bash
pnpm i
pnpm lib:rename
# You will get a prompt that ask you enter the library name you want
# prompt: 
# Enter the library name you want (e.g: my-library-name):  
```

3. There are other built-in scripts in the repo.

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

## Happy coding!!
