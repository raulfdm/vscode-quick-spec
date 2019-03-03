# Quick Spec

<p>
  <a href="https://github.com/raulfdm/vscode-quick-spec">
    <img src="https://img.shields.io/travis/raulfdm/vscode-quick-spec.svg"
         alt="build status">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=raulmelo.vscode-quick-spec">
    <img src="https://vsmarketplacebadge.apphb.com/version/raulmelo.vscode-quick-spec.svg"
         alt="extension version">
  </a>
</p>

![usage gif](https://github.com/raulfdm/vscode-quick-spec/blob/master/media/extension-usage.gif?raw=true)

## Why

Spec/Test files are a common task between developers. This extension is just about quick create those files based on the the opened one and save you of typing or copy&paste the name during the creation. :)

## Installation

### By using Marketplace

This extension is available for free in the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=raulmelo.vscode-quick-spec)

### By using vscode

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`;
2. Search for `Quick Spec`;
3. Click **Install** to install it.

## Using

With a file opened, just open the `Command Palette` (View -> Command Palette) and search for `Quick Spec: create`.

In a nutshell, it'll copy the opened file name and create a new one with the same name but inserting `.test`.

## Customization

Actually isn't possible to define if you want `.test` or `.spec` and most important for each language (e.g. js, ts, rb).

[This feature is coming soon.](https://github.com/raulfdm/vscode-quick-spec/issues/1)

## License

[MIT](LICENSE.md) © [Raul Melo](https://github.com/raulfdm)
