import type { LayoutServerLoad } from './$types'
import User from "$lib/schema/User";
import type { Cookies } from '@sveltejs/kit';
import { Configuration, OpenAIApi } from "openai"
import axios from "axios";
import { get } from 'svelte/store';
import { userWorkoutDataStore } from '$lib/stores/userWorkouts';
import { currentUserStore } from '$lib/stores/currentUser';

const workoutResponse = [
  {
    id: "push-ups_with_feet_on_an_exercise_ball",
    name: 'Push-Ups With Feet On An Exercise Ball',
    type: 'strength',
    muscle: 'chest',
    equipment: 'body_only',
    difficulty: 'intermediate',
    instructions: 'Lie on the floor face down and place your hands about 36 inches apart from each other holding your torso up at arms length. Place your toes on top of an exercise ball. This will allow your body to be elevated. Lower yourself until your chest almost touches the floor as you inhale. Using your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions. Variations: Another way to perform this exercise is to use a flat bench to elevate your body instead of an exercise ball. See Also: Push-Up'
  },
  {
    id: "dumbell_lunges",
    name: "Dumbbell Lunges",
    type: "stretching",
    muscle: "quadriceps",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions: "Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position. Step forward with your right leg around 2 feet or so from the foot being left stationary behind and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground. Using mainly the heel of your foot, push up and go back to the starting position as you exhale. Repeat the movement for the recommended amount of repetitions and then perform with the left leg.  Caution: This is a movement that requires a great deal of balance so if you suffer from balance problems you may wish to either avoid it or just use your own bodyweight while holding on to a fixed object. Definitely never perform with a barbell on your back if you suffer from balance issues. Variations: There are several ways to perform the exercise. One way is to alternate each leg. For instance do one repetition with the right, then the left, then the right and so on. The other way is to do what I call a static lunge where your starting position is with one of your feet already forward. In this case, you just go up and down from that starting position until you are done with the recommended amount of repetitions. Then you switch legs and do the same. A more challenging version is the walking lunges where you walk across the room but in a lunging fashion. For walking lunges the leg being left back has to be brought forward after the lunging action has happened in order to continue moving ahead. This version is reserved for the most advanced athletes. Lunges can be performed with dumbbells as described above or with a barbell on the back, though the barbell variety is better suited for the advanced athletes who have mastered the exercise and no longer have balance issues."
  },
  {
    id: "partner_plank_band_row",
    name: 'Partner plank band row',
    type: 'cardio',
    muscle: 'abdominals',
    equipment: 'bands',
    difficulty: 'intermediate',
    instructions: 'Get into a plank position with your weight evenly distributed on your elbows and toes, keeping your back straight and your hips in line with your back. Your feet should be slightly spread for balance. Your partner should mirror your body position about 5 feet in front of and facing you. Each person should grasp one end of an elastic band with the right hand. This will be your starting position. Maintaining your body weight on three limbs, elevate the right hand and simultaneously pull the elbow back towards your hip in a rowing movement. Return to the start position allowing your elbow to re-establish contact with the floor. Do all reps for one side before switching sides.'
  },
  {
    id: "partner_plank_band_row",
    name: 'Partner plank band row',
    type: 'plyometrics',
    muscle: 'abdominals',
    equipment: 'bands',
    difficulty: 'intermediate',
    instructions: 'Get into a plank position with your weight evenly distributed on your elbows and toes, keeping your back straight and your hips in line with your back. Your feet should be slightly spread for balance. Your partner should mirror your body position about 5 feet in front of and facing you. Each person should grasp one end of an elastic band with the right hand. This will be your starting position. Maintaining your body weight on three limbs, elevate the right hand and simultaneously pull the elbow back towards your hip in a rowing movement. Return to the start position allowing your elbow to re-establish contact with the floor. Do all reps for one side before switching sides.'
  }
]

export const load: LayoutServerLoad = ({ url: { pathname }, cookies, request }) => {
  let userWorkoutData: any = get(userWorkoutDataStore)
  let userData: any = get(currentUserStore)
  if (!request.url.includes("invalidate") && pathname === "/dashboard") {
    userWorkoutData = loadUserWorkouts(cookies)
    userData = saveUserDataToStore(cookies)
  }
  
  return {
    pathname,
    userWorkoutData,
    userData
  };
};

async function loadUserWorkouts(cookies: Cookies) {
  const userData = await User.findOne({ userAuthToken: cookies.get("session") })
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-curie-001",
    prompt: `List five exercises that a person weighing ${userData.weight.toString()}kg and ${userData.height.toString()}cm tall can do at home`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  let choices: any = response.data.choices[0].text?.split(/\r?\n/).filter((val) => {
    return val.length !== 0;
  });
  // console.log("Before requesting data: ", choices);
  for (var i = 0; i < choices.length; i++) {
    choices[i] = choices[i].slice(3);
    // console.log("Workout name: ", choices[i])
    const workoutRequest = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?name=${choices[i]}`,
      {
        headers: {
          "x-api-key": process.env.API_NINJA_KEY,
        }
      }
    );
    // console.log("Response data: ", workoutRequest.data);
    if (workoutRequest.data.length === 0) {
      choices.splice(i, 1)
      i -= 1
    } else {
      const randomWorkout = workoutRequest.data[Math.floor(Math.random() * workoutRequest.data.length)];
      let workoutId = randomWorkout.name.replaceAll(" ", "_").toLocaleLowerCase()
      workoutId.replaceAll("/", "_")
      choices[i] = {
        ...randomWorkout,
        id: workoutId
      }
    }
    // console.log("After processing: ", choices)
    // console.log("var i = ", i)
    continue
  }
  // console.log("After requesting data: ", choices);

  return choices
}

async function saveUserDataToStore(cookies: Cookies) {
  const session = cookies.get("session");
  if (!session) {
    return
  }
  const storedUserData = await User.findOne({ userAuthToken: session });
  // if (storedUserData) {
  //   currentUserStore.set({
  //     username: storedUserData.username,
  //   })
  // }
  if (storedUserData) return {
    username: storedUserData.username,
    height: storedUserData.height,
    weight: storedUserData.weight
  }
}