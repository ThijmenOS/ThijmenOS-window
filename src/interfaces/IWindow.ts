export default interface IWindow {
  Destroy(): void;
  InitBehaviour(): void;
  Freese(): void;
  Unfreese(): void;
  Render(content: string): void;
}
