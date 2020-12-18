import { ISettings, SettingsInstance } from './settings';
import { TaskHandler } from './task-handler';
import Test from './ui/Test.svelte';
import { VaultIntermediate } from './vault';
import { App, Modal, Plugin, TFile } from 'obsidian';

export default class SlatedPlugin extends Plugin {
  private taskHandler: TaskHandler;
  private settings: ISettings;

  private lastFile: TFile | undefined;

  public async onload(): Promise<void> {
    await this.loadSettings();

    const vault = new VaultIntermediate(this.app.vault);
    this.taskHandler = new TaskHandler(vault, this.settings);

    this.registerEvent(
      this.app.workspace.on('file-open', (file: TFile) => {
        // This callback is fired whenever a file receives focus
        // not just when the file is first opened.
        console.debug('Slated: File opened: ' + file.basename);

        if (this.lastFile) {
          this.taskHandler.processFile(this.lastFile);
        }

        this.lastFile = file;
        this.taskHandler.processFile(file);
      }),
    );

    this.addCommand({
      id: 'open-sample-modal',
      name: 'Open Sample Modal',
      checkCallback: (checking: boolean) => {
        if (checking) {
          return this.app.workspace.activeLeaf !== undefined;
        }

        new SampleModal(this.app).open();
      },
    });
  }

  private async loadSettings(): Promise<void> {
    const loadedSettings = await this.loadData();
    this.settings = new SettingsInstance(loadedSettings);
  }
}

class SampleModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  public onOpen = (): void => {
    const { contentEl } = this;
    const app = new Test({
      target: contentEl,
    });
  };

  public onClose = (): void => {
    const { contentEl } = this;
    contentEl.empty();
  };
}
