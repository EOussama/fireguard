import { initializeApp, type FirebaseApp, } from 'firebase/app';
import { getAuth, GoogleAuthProvider, type Auth, type AuthProvider } from 'firebase/auth';

import { InvalidAppError } from '@eoussama/firemitt';
import type { TFirebaseConfig, TNullable } from '@eoussama/firemitt';

import { CacheHelper } from './cache.helper';


export class FirebaseHelper {

  static apps: CacheHelper<FirebaseApp> = new CacheHelper<FirebaseApp>();
  static auths: CacheHelper<Auth> = new CacheHelper<Auth>();

  private static getApp(credentials: TFirebaseConfig): TNullable<FirebaseApp> {
    if (!this.apps.has(credentials.appId)) {
      const app = initializeApp(credentials as any);
      this.apps.set(credentials.appId, app);
    }

    return this.apps.get(credentials.appId);
  }

  static getAuth(credentials: TFirebaseConfig): TNullable<Auth> {
    try {
      if (!this.auths.has(credentials.appId)) {
        const app = this.getApp(credentials);

        if (app) {
          const auth = getAuth(app);
          this.auths.set(credentials.appId, auth);
        }
      }

      return this.auths.get(credentials.appId);
    } catch (_) {
      throw new InvalidAppError();
    }
  }

  static getProvider(): AuthProvider {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    return provider;
  }
}