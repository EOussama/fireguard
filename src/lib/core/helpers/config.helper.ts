import chroma from 'chroma-js';

import type { TColor } from '../types/color.type';
import type { TConfig } from '../types/config.type';
import type { TOptions } from '../types/options.type';

export class ConfigHelper {

  private static init(options: TOptions): TConfig {
    const name = options?.name ?? '';
    if (name.length === 0) throw Error('Invalid Name');

    const firebase = options?.firebase ?? {};
    if (Object.keys(firebase).length === 0) throw Error('Invalid Credential');

    const logo = options?.logo ?? '';
    const theme = {
      text: options?.theme?.text || '#1a3544',
      primary: options?.theme?.primary || '#ffe536',
      secondary: options?.theme?.secondary || '#1a3544'
    };

    return { name, logo, theme, firebase };
  }

  private static loadColor(name: TColor, color: string): void {
    const root = document.querySelector(':root') as any;
    const chromaColor = chroma(color);

    if (root) {
      const colorHex = chromaColor.hex();
      const colorRgb = chromaColor.rgb();
      const colorHsl = chromaColor.hsl();

      root.style.setProperty(`--color-${name}`, colorHex);
      root.style.setProperty(`--color-${name}-rgb`, colorRgb.join(','));
      root.style.setProperty(`--color-${name}-hsl`, `${colorHsl[0]}, ${colorHsl[1] * 100}%`);
    }
  }

  static load(config: TOptions): TConfig {
    const conf = this.init(config);
    const colors: Array<TColor> = ['primary', 'secondary', 'text'];

    colors.forEach(color => this.loadColor(color, conf.theme[color]));

    return conf;
  }
}