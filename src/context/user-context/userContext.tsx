import { useState, createContext, useContext, useMemo } from 'react';
import { UserData, UserDataContextProviderProps, UserDataContextType } from './userContext.types';
import imConfigs from '@/configs/imConfigs';
import storageHelpers from '@/helpers/storage-helpers/storageHelpers';

const UserDataContext = createContext<UserDataContextType>({} as UserDataContextType);
const { localStorageKeys } = imConfigs;

function UserDataProvider({ children }: UserDataContextProviderProps) {
  const storedValue = storageHelpers.local.getItem(localStorageKeys.userInfo);
  const [userData, setUserData] = useState<UserData>(storedValue as UserData);

  const memoizedUserData = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData, setUserData]
  );

  return <UserDataContext.Provider value={memoizedUserData}>{children}</UserDataContext.Provider>;
}

export default UserDataProvider;

export const useUserDataContext = () => useContext(UserDataContext);
