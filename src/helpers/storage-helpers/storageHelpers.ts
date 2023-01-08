const storageHelpers = {
  local: {
    getItem(key: string): unknown {
      try {
        const storedValue = localStorage.getItem(key);

        if (storedValue) {
          return JSON.parse(storedValue);
        }
        return '';
      } catch (error) {
        console.error(error);
      }
    },
    setItem(key: string, value: unknown): void {
      localStorage.setItem(key, JSON.stringify(value));
    },
  },
  session: {
    getItem(key: string): unknown {
      try {
        const storedValue = sessionStorage.getItem(key);

        if (storedValue) {
          return JSON.parse(storedValue);
        }
        return '';
      } catch (error) {
        console.error(error);
      }
    },
    setItem(key: string, value: unknown): void {
      sessionStorage.setItem(key, JSON.stringify(value));
    },
  },
};

export default storageHelpers;
