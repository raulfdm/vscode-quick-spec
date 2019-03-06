# Change Log

All notable changes to the "Quick Spec" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.8] - 2019-03-06

### Fixed

- Fix NPM scripts. It's deploying wrong `out/` files, sending outdate compiled code and causing `Command not found` even if it's fixed.

---

## [0.0.7] - 2019-03-06

### Fixed

- Manually deploy.

---

## [0.0.6] - 2019-03-04

### Fixed

- [Bug] Command not found. ([Issue #14](https://github.com/raulfdm/vscode-quick-spec/issues/14))

### Changed

- [package.json] Add License Field

---

## [0.0.5] - 2019-03-03

### Added

- Set `job` to automatically deploy when it's `master`

### Changed

- [package.json] Add License Field

---

## [0.0.4] - 2019-03-03

### Added

- Add MIT License;
- Animated GIF "how to use";

### Changed

- [README] Write down all extension information

---

## [0.0.3] - 2019-03-03

### Added

- [CI] Add build CI with Travis;

### Changed

- [Rename]
  - Repo name `vscode-create-spec` to `vscode-quick-spec`
  - Access menu from `Create Spec File` to `Quick Spec: create`

---

## [0.0.2] - 2019-03-03

### Fixed

- [error] Fix `command 'extension.createSpec' not found`. Typo on `package.json` activationEvents

---

## [0.0.1] - 2019-03-03

- Initial release
