import * as vscode from 'vscode';

import { Settings as SettingsEnum } from './enums';

export type DefaultExt = vscode.WorkspaceConfiguration | undefined;
export type ExtensionPerLanguage = { [s: string]: string } | DefaultExt;

export class Settings {
  private defaultExtension: DefaultExt;
  private extensionPerLanguage: ExtensionPerLanguage;

  constructor() {
    const settings = vscode.workspace.getConfiguration(SettingsEnum.source);

    this.defaultExtension = settings.get(SettingsEnum.defaultExt);
    this.extensionPerLanguage =
      settings.get(SettingsEnum.extensionPerLanguage) || {};
  }

  get defaultLanguage(): DefaultExt {
    return this.defaultExtension;
  }

  getLanguageExtension(language: string): string | undefined {
    return !this.extensionPerLanguage
      ? undefined
      : this.extensionPerLanguage[language];
  }
}
