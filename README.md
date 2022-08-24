# Create Vibrary

A published-ready template for components and composable functions library.

- vite
- vitest
- storybook or [viteplay](https://viteplay-docs.onrender.com/) for documentation

## Scaffolding Your First Library

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
- `react`

Template presets still work in progress:

- `vanilla`
- `vanilla-ts`
- `vue`
- `react-ts`
- `preact`
- `preact-ts`
- `lit`
- `lit-ts`
- `svelte`
- `svelte-ts`

## Release it!

Vibrary
- Use [release-it](https://github.com/release-it/release-it) for version management and publish 
- Auto generate changelog file (e.g. CHANGELOG.md) with [@release-it/conventional-changelog](https://github.com/release-it/conventional-changelog) plugin
  - Follow [Angular commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

For example, to release a new version of your lib,
run: 

```bash
pnpm release
```

Then follow the prompts!

### Troubleshooting hints

If you get an error when running `pnpm release`, you maybe miss the git repository url in `package.json`, for example, to add git repository url:

```json
// in package.json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your/your-repo-url.git"
  }
}
```
