export class FireguardHelper {
  static isReady(): boolean {
    return Boolean(globalThis.window.opener);
  }
}