export type UserStoreType = {
  username: string;
  weight: number;
  height: number;
  profilePicture: string | undefined;
};

export type UserDietStoreType = {
  id: string;
  name: string;
  thumbnail: string;
  ingredients: string[];
  cuisineType: string[];
  steps: string;
  calories: number;
  source: string;
  serves: number;
};

export type ExerciseDataType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  likes: number;
  likedUsers: string[];
};
