export {};

declare global {
  interface Window {
    openVedaApp: (skipAuth?: boolean) => void;
    switchMode: (mode: string) => void;
    toggleSidebar: () => void;
    sendChat: () => Promise<void>;
    initHome: () => void;
  }
}
