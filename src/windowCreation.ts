import ICreateWindow from "./interfaces/IWindowCreation";
import { ApplicationMetaData } from "@thijmenos/common";
import { BaseWindowOptions, WindowType } from "./types/windowTypes";

class CreateWindow implements ICreateWindow {
  private readonly windowOptions: BaseWindowOptions = {
    windowHeight: 400,
    windowWidth: 700,
    windowType: WindowType.APPLICATION,
  };

  private windowContent = "";
  private windowFileLocation = "";
  private windowTitle = "";
  private windowIconLocation?: string;
  private windowId?: string;

  public Application(fileIcon: any | ApplicationMetaData) {
    this.windowFileLocation = fileIcon.exeLocation;
    this.windowTitle = fileIcon.title;
    this.windowIconLocation = fileIcon.iconLocation;

    this.windowId = GenerateUUID();

    this.windowContent = `<iframe id='${this.windowId}' name='${this.windowId}' class='app-iframe' style="height: ${this.windowOptions.windowHeight}px; width: ${this.windowOptions.windowWidth}px;" src='${host}/static/${this.windowFileLocation}'></iframe>`;

    return this.InitWindow();
  }

  public InitWindow(): Window {
    const window = this._window.NewWindow({
      windowTitle: this.windowTitle,
      iconLocation: this.windowIconLocation,
      windowHeight: this.windowOptions.windowHeight,
      windowWidth: this.windowOptions.windowWidth,
      windowType: this.windowOptions.windowType,
      windowIdentifier: this.windowId!,
    });
    window.InitTemplate();
    window.Render(this.windowContent);
    window.InitBehaviour();

    return window;
  }
}

export default CreateWindow;
