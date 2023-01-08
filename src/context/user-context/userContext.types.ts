type RolesType = {
  id: number;
  name: string;
};

export type UserData = {
  id: number;
  username: string;
  jwt: string;
  roles: RolesType[];
  admin: boolean;
};

export type UserDataContextProviderProps = {
  children: React.ReactNode;
};

export type UserDataContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};
