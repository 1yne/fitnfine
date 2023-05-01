import type { RequestHandler } from "@sveltejs/kit";
import Workouts from "$lib/schema/Workouts.ts";
import User from "$lib/schema/User.ts";
import { json } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request, cookies }) => {
  const session = cookies.get("session");
  const data = await request.json();

  const workoutData = await Workouts.findOne({ _id: data.id });
  const userData = await User.findOne({ userAuthToken: session });

  return json({ workoutData, userData });
};
