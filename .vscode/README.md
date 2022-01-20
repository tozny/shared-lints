# Editor settings!

Most of us are already using VSCode, so these docs mostly go over configuring some good-to-have editor settings for that. If you use something else, being the 1337H4xX0r you are, we leave it as an excise for the reader to figure out how to get the following functionality in your editor. If it feels like something someone else would benefit from knowing, document it here <3

At a bare minimum, you should try to enable formatting on save & setup plugins/extensions for ESLint & Prettier.

## Recommended VSCode Extensions
The fact that this readme is in a file named `.vscode` is a hack. Clone this repo and open it in vscode, it will recommend a list of extensions for you to use. Don't feel obligated to use all or any of them. Have something others should know about? Add it to the `extensions.json`.

They all have comments in the [extensions file](extensions.json), so check that to know if you actually want a thing.

## Recommended VSCode Settings
Settings in this section are as JSON set in VSCode's `settings.json`.

Open your editor's settings JSON by opening the command pallette (Cmd+Shift+P) and running "Preferences: Open Settings (JSON)".

Note that many of the formatting-specific options should be getting enforced by automated linters & formatters.

There are many great settings in modern editors. These are just a few that affect the content of files. Feel free to add more. Do what you want.

```jsonc
{
  // runs your default formatter on save!
  "editor.formatOnSave": true,

  // whitespace things
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.eol": "\n",

  // useful for preventing prettier from messing with files not controlled by prettier
  "prettier.requireConfig": true
}
```

## A note about formatting from the editor
Some useful commands you should know exist in the Command Palette (Cmd+Shift+P):
* Format document (Shift+Cmd+F)
* Format document with... - allows you to pick a specific formatter if you have multiple. Also, is how you can easily set defualt formatter.
* Save without formatting (Cmd+K S) - sometimes you don't want the editor to take control
