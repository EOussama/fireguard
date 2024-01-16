import { signInWithPopup } from 'firebase/auth';

import { FirebaseHelper } from './firebase.helper';
import type { TToken } from '../types/token.type';
import type { TFirebaseConfig } from '../types/firebase-config.type';

export class AuthHelper {

  static login(credentials: TFirebaseConfig): Promise<string> {
    return new Promise(resolve => {
      const auth = FirebaseHelper.getAuth(credentials);
      if (!auth) throw Error('Invalid Auth');

      const provider = FirebaseHelper.getProvider();
      if (!provider) throw Error('Invalid Provider');

      signInWithPopup(auth, provider).then((e: any) => {
        const token = (e as TToken)._tokenResponse.oauthIdToken ?? '';
        resolve(token);
      })
    });
  }
}