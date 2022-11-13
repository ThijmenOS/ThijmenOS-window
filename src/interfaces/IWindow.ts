import { WindowOptions } from "@thijmenos/common";
import Window from "../window";

export default interface IWindow {
  NewWindow(windowOptions: WindowOptions): Window;
  Destroy(): void;
  InitBehaviour(): void;
  Freese(): void;
  Unfreese(): void;
  Render(content: string): void;
}
