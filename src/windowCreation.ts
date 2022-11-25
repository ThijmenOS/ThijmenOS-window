/* <Class Documentation>

  <Class Description>
    This class handles everyting that has to happen before a window can be created, such as getting the application executable that has to go in the window

  <Method Description>
    Application(): Gather information about the application it has to render
    InitWindow(): Takes this gathered information and content and makes a new window out of it.

*/

import ICreateWindow from "./interfaces/IWindowCreation";
import { IconMetadataShape, host } from "@thijmen-os/common";
import { GenerateUUID } from "@thijmen-os/utils";
import { Window } from "./window";
import { windowOptions } from "./defaults";

export class CreateWindow implements ICreateWindow {
  private windowContent = "";
  private windowFileLocation = "";
  private windowTitle = "";
  private windowIconLocation?: string;
  private windowId?: string;

  public Application(fileIcon: IconMetadataShape) {
    this.windowFileLocation = fileIcon.exeLocation;
    this.windowTitle = fileIcon.name;
    this.windowIconLocation = fileIcon.icon;

    this.windowId = GenerateUUID();

    this.windowContent = `<iframe id='${this.windowId}' name='${this.windowId}' class='app-iframe' style="height: ${windowOptions.windowHeight}px; width: ${windowOptions.windowWidth}px;" src='${host}/static/${this.windowFileLocation}'></iframe>`;

    return this.InitWindow();
  }

  private InitWindow(): Window {
    const window = new Window({
      windowTitle: this.windowTitle,
      iconLocation: this.windowIconLocation,
      windowHeight: windowOptions.windowHeight,
      windowWidth: windowOptions.windowWidth,
      windowType: windowOptions.windowType,
      windowIdentifier: this.windowId!,
    });
    window.InitTemplate();
    window.Render(this.windowContent);
    window.InitBehaviour();

    return window;
  }
}
