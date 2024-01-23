import chroma from 'chroma-js';
import type { TFireguardConfig, TColor } from '@eoussama/firemitt';

export class ConfigHelper {

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

  static load(config: TFireguardConfig): TFireguardConfig {
    const colors: Array<TColor> = ['primary', 'secondary', 'text'];
    colors.forEach(color => this.loadColor(color, config.theme[color]));

    return config;
  }
}