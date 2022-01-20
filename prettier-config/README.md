# Tozny's Prettier Config
Prettier is an opinionated formatter and style enforcer for javascript & web code.

If you want to have pedantic arguments over the pros and cons of things like "double" vs 'single' quotes or if we should have semicolons or not, you begin that discussion with a PR to this repo. The few overrides of the prettier defaults we have here are mostly a matter of unifying what have previously been de facto configurations across our repos.

## Install
```bash
npm install -D prettier @tozny-secure/prettier-config
```

## Use
Use this in an npm project by adding the following line to your `package.json`:
```json
"prettier": "@toznysecure/prettier-config"
```

Then add a `prettier` npm script:
```json
"prettier": "prettier --write <file-matching-pattern>"
```

example:
```json
"prettier": "prettier --write {public,src,tests}"
```
When you run `npm run prettier` with the above in the `scripts` of your `package.json`, it runs prettier for all files in the public, src, and tests directories and fixes all the formatting differences it finds.

# Repo-level overrides
See [here](https://prettier.io/docs/en/configuration.html#sharing-configurations) for how to include your own specific repo-level overrides, but also provide a real good explanation why it should exist in just that repo and not here (and why it should exist at all).
