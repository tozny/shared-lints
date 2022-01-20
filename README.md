# Tozny's shared lint configurations!

The purpose of this repo is to provide a single place in which we can store and share our linting & editor configuration rule sets.

It is a monorepo that contains multiple different packages for your linting pleasure. It makes use of [`npm`'s "workspaces"](https://docs.npmjs.com/cli/v8/using-npm/workspaces) to manage multiple different npm packages in a single place. Note that "workspace" is an overloaded term that refers to both the monorepo and the individual packages within it.

## Javascript linting & formatting
This monorepo contains two packages for giving your javascript project automated linting & formatting powers. See the two readmes for more details:
* [@toznysecure/eslint-config](./eslint-config#readme)
* [@toznysecure/prettier-config](./prettier-config#readme)

---

TODO docs
* publishing
* VSCode settings & recommended extensions
