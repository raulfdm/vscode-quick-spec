import * as vscode from 'vscode';
import * as path from 'path';

export class FileData {
  targetFullPath: string;
  config: vscode.WorkspaceConfiguration;

  constructor(currentFileOpened: vscode.TextEditor) {
    this.targetFullPath = currentFileOpened.document.fileName;
    this.config = vscode.workspace.getConfiguration();
  }

  get targetNameWithExtension() {
    return path.basename(this.targetFullPath);
  }

  get targetNameWithoutExtension() {
    return this.targetNameWithExtension.replace(this.extension, '');
  }

  get dirname() {
    return path.dirname(this.targetFullPath);
  }

  get extension() {
    return path.extname(this.targetNameWithExtension);
  }

  get specName() {
    return `${this.targetNameWithoutExtension}.test${this.extension}`;
  }

  get specGlob() {
    return `*/${this.specName}`;
  }

  get specFullPath() {
    return path.resolve(this.dirname, this.specName);
  }

  get specUri() {
    return vscode.Uri.parse(`file:/${this.specFullPath}`);
  }

  get specContent() {
    return '';
  }
}
