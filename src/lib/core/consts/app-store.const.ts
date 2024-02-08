import type { TAppState } from '../types/app-state.type';

export const initialAppState: TAppState = {
  token: null,
  config: null,
  errorMsg: null,
  loading: true
};