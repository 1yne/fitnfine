import type { RequestHandler } from "@sveltejs/kit";
import Workouts from "$lib/schema/Workouts.ts";
import { allExercises } from "$lib/exerciseData.ts";
import { json } from "@sveltejs/kit"
import User from "$lib/schema/User.ts";

export const POST: RequestHandler = async ({ request, cookies }) => {
  const session = cookies.get("session")
  const data = await request.json();
  let response
  if (data.addLikes === true) {
    const workoutData = await Workouts.findOne({ _id: data.id })
    const userData = await User.findOne({ userAuthToken: session });

    workoutData.likes = workoutData.likes + 1
    workoutData.likedUsers.push(userData._id)
    userData.likedWorkouts.push(workoutData._id)
    
    await Workouts.replaceOne(
      { _id: data.id },
      workoutData
    );
    await User.replaceOne(
      { _id: userData._id },
      userData
    );

    response = await Workouts.findOne({ _id: data.id })
  } else {
    const workoutData = await Workouts.findOne({ _id: data.id })
    const noOfLikes = workoutData.likes === 0 ? 0 : workoutData.likes - 1
    const userData = await User.findOne({ userAuthToken: session });

    workoutData.likes = noOfLikes
    workoutData.likedUsers = workoutData.likedUsers.filter((val) => val !== userData._id)
    userData.likedWorkouts = userData.likedWorkouts.filter((val) => val !== workoutData._id)

    await Workouts.replaceOne(
      { _id: data.id },
      workoutData
    );
    await User.replaceOne(
      { _id: userData._id },
      userData
    );

    response = await Workouts.findOne({ _id: data.id })
  }
  return json(response)
};
