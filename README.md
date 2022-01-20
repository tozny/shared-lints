# Tozny's shared lint configurations!

The purpose of this repo is to provide a single place in which we can store and share our linting & editor configuration rule sets.

It is a monorepo that contains multiple different packages for your linting pleasure. It makes use of [`npm`'s "workspaces"](https://docs.npmjs.com/cli/v8/using-npm/workspaces) to manage multiple different npm packages in a single place. Note that "workspace" is an overloaded term that refers to both the monorepo and the individual packages within it.

## Javascript linting & formatting
This monorepo contains two packages for giving your javascript project automated linting & formatting powers. See the two readmes for more details:
* [@toznysecure/eslint-config](./eslint-config#readme)
* [@toznysecure/prettier-config](./prettier-config#readme)

## Publishing
Each of the npm packages in this repo must be published separately when a change is made. This is the procedure:

First, make sure you have an npm account with the necessary permissions to publish to the `@toznysecure` scope.

1. Login to npm: `npm login`. Follow the prompts.
2. Go to the directory of the package.
3. Change the `version` inside of the `package.json`. Note that `npm version` won't play nicely because it will attempt to tag the git commit, but the repo contains multiple packages. So just go change it by hand.
4. Run `npm publish`. Check the notices & do the thing.

To use your new version in a project simply run `npm i <package-name>@latest`.

# VSCode Settings
This repo also contains info about preferred editor settings & some recommended extensions if you use VSCode. Find details about that [here](./.vscode#readme).
