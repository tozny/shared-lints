# Tozny's ESLint configs

Eslint is a linting engine for javascript that enforces good coding practices and prevents potential bugs. These are the rules tozny uses across our javascript repositories.

## Install
```bash
npm install -D eslint @toznysecure/eslint-config
```

## Use
This repo contains different configs for different purposes. Depending on the type of project, you'll use a different config, potentially with some additional dependencies. We have you manually install these packages to reduce the bloat of adding things your project type may not need.

Add a file named `.eslintrc` to your repo with the following contents (depending on your project).

After that, you're all set up! Add a lint script to your package.json and make sure your editor is configured to respect your new linting configuration. (TODO @pirtleshell)

### Javascript Library
```json
{
  "extends": "@toznysecure"
}
```

### Typescript Library
Additional required dependencies: `npm i -D typescript typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`

```json
{
  "extends": "@toznysecure/eslint-config/typescript"
}
```

### Vue App
Additional required dependencies: `npm i -D eslint-plugin-vue @vue/cli-plugin-eslint`

```json
{
  "extends": "@toznysecure/eslint-config/vue"
}
```

## A note about linting
We use prettier for formatting and style enforcement. This eslint config uses the prettier eslint config to turn off all styling rules in eslint that may conflict with prettier. We use eslint for its code health improvement powers, not for styling!

If you find yourself fighting a styling or formatting thing, you'll want to combat that with prettier rules, not in this repo.

A good rule of thumb: ["Prettier for formatting, linters for catching bugs"](https://prettier.io/docs/en/comparison.html)

## A note about peer dependencies
In true node toolchain fashion, dependency patterns are frustrating and not all features are supported everywhere. Despite `optionalPeerDependencies` being a thing `package.json`s support, it seems ESLint wants to pretend they don't exist. For this reason, some packages like the typescript parser & the vue config are listed under `peerDependencies` despite being optional. This is because they do not get properly resolved otherwise.

If you happen to get errors regarding a peer dependency not existing that has no bearing on your project type, they can be safely ignored.
