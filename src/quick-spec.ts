import * as vscode from 'vscode';
import * as fs from 'fs';
import { promisify } from 'util';

import { FileData } from './models/FileData';

const writeFilePromise = promisify(fs.writeFile);

export const create = async () => {
  const currentFileOpened = vscode.window.activeTextEditor;

  if (!currentFileOpened) {
    vscode.window.showInformationMessage('You need a file opened to do that.');
    return;
  }

  const fileData = new FileData(currentFileOpened);
  const foundFiles = await vscode.workspace.findFiles(fileData.specGlob);

  if (foundFiles.length > 0) {
    vscode.window.showInformationMessage(
      `"${fileData.specName}" already exists!`
    );
    return;
  }

  function openFile() {
    return vscode.workspace
      .openTextDocument(fileData.specUri)
      .then(doc => vscode.window.showTextDocument(doc));
  }
  function successMessage() {
    return vscode.window.showInformationMessage(
      `File "${fileData.specName}" has been created.`
    );
  }

  writeFilePromise(fileData.specFullPath, fileData.specContent)
    .then(openFile)
    .then(successMessage);
};
