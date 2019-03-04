import * as vscode from 'vscode';
import { Commands } from './models';
import { createSpec } from './commands';

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "vscode-quick-spec" is now active!');

  const disposable = vscode.commands.registerCommand(
    Commands.createSpec,
    createSpec
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('Extension "vscode-quick-spec" is now deactive!');
}
