import type { TTheme } from './theme.type';
import type { TConfig } from './config.type';

export type TOptions = { name: string, theme?: Partial<TTheme> } & Partial<TConfig>