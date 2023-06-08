export interface Plugin {
  name: string,
}

export interface Plugins {
  isAvailable(name: string): boolean;
}

export const Plugins: Plugins = {
  isAvailable(name: string): boolean {
    return false;
  }
}
