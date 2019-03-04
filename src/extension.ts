import * as vscode from 'vscode';
import { create } from './quick-spec';

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-create-spec" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    'extension.create',
    create
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
