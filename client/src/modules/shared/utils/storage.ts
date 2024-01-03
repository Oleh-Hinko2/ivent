export const localStorageHelper = {
  get: (key: string) => {
    const stored = localStorage.getItem(key);
    return stored == null ? undefined : JSON.parse(stored);
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  delete: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

export const sessionStorageHelper = {
  get: (key: string) => {
    const stored = sessionStorage.getItem(key);
    return stored == null ? undefined : JSON.parse(stored);
  },
  set: (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  delete: (key: string) => {
    sessionStorage.removeItem(key);
  },
  clear: () => {
    sessionStorage.clear();
  },
};
