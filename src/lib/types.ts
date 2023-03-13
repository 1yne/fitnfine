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

export type UserDietStoreType = {
  id: string,
  name: string,
  thumbnail: string,
  ingredients: string[],
  cuisineType: string[],
  steps: string,
  calories: number,
  source: string,
  serves: number
}
