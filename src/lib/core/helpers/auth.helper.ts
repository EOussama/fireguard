import { signInWithPopup } from 'firebase/auth';

import { FirebaseHelper } from './firebase.helper';
import { InvalidAppError } from '../errors/invalid-app.error';

import type { TToken } from '../types/token.type';
import type { TFirebaseConfig } from '../types/firebase-config.type';
import { InvalidProviderError } from '../errors/invalid-provider.error';

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