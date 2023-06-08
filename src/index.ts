export interface Plugin {
  name: string,
}

export interface Plugins {
  isAvailable(name: string): boolean;
}

export const Plugins: Plugins = {
  isAvailable(name: string): boolean {
    log(`Calling isAvailable on ${name}`);
    return false;
  },
};
