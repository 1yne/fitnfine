import type { PageServerLoad} from "./$types";
import User from "$lib/schema/User.ts";
import Workouts from "$lib/schema/Workouts.ts";

export const load: PageServerLoad = async ({
  url: { pathname },
  request,
  cookies,
}) => {
  const session = cookies.get("session");
  const userData = await User.findOne({ userAuthToken: session });
  let workouts = [];

  for await (const likedWorkoutId of userData.likedWorkouts) {
    const workoutData = await Workouts.findById(likedWorkoutId);
    workouts.push({
      bodyPart: workoutData.bodyPart,
      equipment: workoutData.equipment,
      gifUrl: workoutData.gifUrl,
      id: workoutData._id,
      name: workoutData.name,
      target: workoutData.target,
      likes: workoutData.likes,
      likedUsers: workoutData.likedUsers,
    });
  }

  const modifiedUserObj = {
    username: userData.username,
    weight: userData.weight,
    height: userData.height,
    likedWorkouts: userData.likedWorkouts,
  };
  return {
    workouts,
    userData: modifiedUserObj,
  };
};
