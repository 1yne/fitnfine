import type { RequestHandler } from "@sveltejs/kit";
import Workouts from "$lib/schema/Workouts";
import { allExercises } from "$lib/exerciseData";

export const GET: RequestHandler = async () => {
  allExercises.forEach(async (exercise) => {
    const { bodyPart, equipment, gifUrl, name, target } = exercise;
    const newObj = {
      _id: exercise.id,
      bodyPart,
      equipment,
      gifUrl,
      name,
      target,
      likes: 0,
      likedUsers: [],
    };
    await new Workouts(newObj).save();
  });
  return new Response("Successful");
};
