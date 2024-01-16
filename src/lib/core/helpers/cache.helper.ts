import type { TNullable } from '../types/nullable.type';

export class CacheHelper<T> {
  private cache: { [key: string]: T };

  constructor() {
    this.cache = {};
  }

  set(key: string, value: T) {
    if (!this.has(key)) {
      this.cache[key] = value;
      return true;
    }

    return false;
  }

  get(key: string): TNullable<T> {
    return this.cache[key];
  }

  has(key: string): boolean {
    return Boolean(this.get(key));
  }

  delete(key: string): boolean {
    if (this.has(key)) {
      delete this.cache[key];
      return true;
    }

    return false;
  }
}