import type { TAppState } from './app-state.type';
import type { TFireguardConfig } from '@eoussama/firemitt';
import type { Invalidator, Subscriber, Unsubscriber } from 'svelte/store';

export type TAppStore = {
  subscribe: (this: void, run: Subscriber<TAppState>, invalidate?: Invalidator<TAppState> | undefined) => Unsubscriber

  init: () => void
  loadConfig: (config: TFireguardConfig) => void

  stopLoader: () => void
  startLoader: () => void

  clearToken: () => void
  registerToken: (token: string) => void

  clearError: () => void,
  raiseError: (errorMsg: string) => void
}