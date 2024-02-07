import type { TFireguardConfig, TNullable } from '@eoussama/firemitt';

export type TAppState = {
  loading: boolean
  token: TNullable<string>
  errorMsg: TNullable<string>
  config: TNullable<TFireguardConfig>
}