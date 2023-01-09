import { useState, createContext, useContext, useMemo, useCallback } from 'react';
import { StorageContextProviderProps, StorageTypes, Keyable } from './StorageContext.types';

export const StorageContext = createContext<StorageTypes>({} as StorageTypes);

const getLocalStorageIMData = () =>
  Object.fromEntries(Object.entries({ ...localStorage }).filter((entry) => entry[0].startsWith('IM:'))) ?? {};
const getSessionStorageIMData = () =>
  Object.fromEntries(Object.entries({ ...sessionStorage }).filter((entry) => entry[0].startsWith('IM:'))) ?? {};

export default function StorageProvider({ children }: StorageContextProviderProps) {
  const [localStorageState, setLocalStorageState] = useState<object>(getLocalStorageIMData());
  const [sessionStorageState, setsessionStorageState] = useState<object>(getSessionStorageIMData());

  const setLocalStorageItem = useCallback(
    (key: string, entry: unknown) => {
      setLocalStorageState((state: object) => ({ ...state, [key]: entry }));
      localStorage.setItem(key, JSON.stringify(entry));
    },
    [localStorageState]
  );

  const setSessionStorageItem = useCallback(
    (key: string, entry: unknown) => {
      setsessionStorageState((state: object) => ({ ...state, [key]: entry }));
      sessionStorage.setItem(key, JSON.stringify(entry));
    },
    [sessionStorageState]
  );

  const getLocalStorageItem = useCallback((key: string): Keyable => localStorageState[key as keyof object], [localStorageState]);
  const getSessionStorageItem = useCallback((key: string): Keyable => sessionStorageState[key as keyof object], [sessionStorageState]);

  const memoizedStorageFunctions = useMemo(
    () => ({ setLocalStorageItem, getLocalStorageItem, setSessionStorageItem, getSessionStorageItem }),
    [setLocalStorageItem, getLocalStorageItem, setSessionStorageItem, getSessionStorageItem]
  );
  return <StorageContext.Provider value={memoizedStorageFunctions}>{children}</StorageContext.Provider>;
}

export const useStorageContext = () => useContext(StorageContext);
