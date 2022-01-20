# Tozny's shared lint configurations!

The purpose of this repo is to provide a single place in which we can store and share our linting and
editor configuration rule sets.

It is a monorepo that contains multiple different packages for your linting pleasure.

## Install
Through some npm magic, all the packages can be install in one fell swoop!
```sh
npm install --save-dev git@github.com:tozny/shared-lints.git
```

The package lock will preserve the commit hash that was used at the time of install, but you can also explicitly set the git commit hash, branch, or tag with a `#<commit-ref>` at the end of the package name.

This will install all the containing npm packages listed in the [package.json](./package.json).

## Updating
Creating a new version is as simple as pushing code to `main` on this repo. Then from the consuming project repo simple rerun the install command to pick up the latest changes.

---

TODO docs
VSCode settings & recommended extensions
prettier
