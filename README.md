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

To customize how the files are generate, go to User Settings (`Code → Preferences → Settings`) and search for `Quick Spec`.

| name                             | Default | Description                                                                                                                                               | example                                                |
| -------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `quickSpec.defaultExtension`     | `.test` | Spec extension which will be applied for `all` kind of file extension                                                                                     | `"quickSpec.defaultExtension": ".spec"`                |
| `quickSpec.extensionPerLanguage` | `{}`    | Object which accepts file extension (key) and the test extension (value). This is for when you want to create a specific test _only_ for one kind of file | `"quickSpec.extensionPerLanguage": { ".go": ".spec" }` |

## License

[MIT](LICENSE.md) © [Raul Melo](https://github.com/raulfdm)
