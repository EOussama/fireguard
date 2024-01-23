import { signInWithPopup } from 'firebase/auth';

import type { TFirebaseConfig, TToken } from '@eoussama/firemitt';
import { InvalidAppError, InvalidProviderError } from '@eoussama/firemitt';

import { FirebaseHelper } from './firebase.helper';

export class AuthHelper {

  static login(credentials: TFirebaseConfig): Promise<string> {
    return new Promise(resolve => {
      const auth = FirebaseHelper.getAuth(credentials);
      if (!auth) throw new InvalidAppError();

      const provider = FirebaseHelper.getProvider();
      if (!provider) throw new InvalidProviderError('unknown');

      signInWithPopup(auth, provider).then((e: any) => {
        const token = (e as TToken)._tokenResponse.oauthIdToken ?? '';
        resolve(token);
      })
    });
  }
}