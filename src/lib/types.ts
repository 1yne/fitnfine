export type UserModelType = {
  _id: string;
  username: string;
  passwordHash: string;
  userAuthToken: string;
  email: string;
  height: number;
  weight: number;
};

export type UserStoreType = {
  username: string;
  weight: number;
  height: number;
};
