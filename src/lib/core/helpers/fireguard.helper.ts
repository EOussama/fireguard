/**
 * @description
 * Helper class for Fireguard related functionalities.
 */
export class FireguardHelper {

  /**
   * @description
   * Checks if Fireguard is ready.
   *
   * @returns Returns true if Fireguard is ready, otherwise false.
   */
  static isReady(): boolean {
    return Boolean(globalThis.window.opener);
  }
}