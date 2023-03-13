import type { LayoutServerLoad } from "./$types";
import User from "$lib/schema/User";
import type { Cookies } from "@sveltejs/kit";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import { get } from "svelte/store";
import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
import { currentUserStore } from "$lib/stores/currentUser";
import { userDietsStore } from "$lib/stores/userDiets";
import { edamamResponse, workoutResponse, openAIDietResponse, openAIResponse } from "$lib/utils";

export const load: LayoutServerLoad = ({
  url: { pathname },
  cookies,
  request,
}) => {
  let userWorkoutData: any = get(userWorkoutDataStore);
  let userData: any = get(currentUserStore);
  let userDiets: any = get(userDietsStore);
  if (!request.url.includes("invalidate") && pathname === "/dashboard") {
    userWorkoutData = loadUserWorkouts(cookies);
    userData = saveUserDataToStore(cookies);
    userDiets = loadUserDiets();
  }

  return {
    pathname,
    userWorkoutData,
    userData,
    userDiets,
  };
};

async function loadUserWorkouts(cookies: Cookies) {
  const userData = await User.findOne({
    userAuthToken: cookies.get("session"),
  });
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
  let choices: any = response.data.choices[0].text
    ?.split(/\r?\n/)
    .filter((val) => {
      return val.length !== 0;
    });
  for (var i = 0; i < choices.length; i++) {
    choices[i] = choices[i].slice(3);
    const workoutRequest = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?name=${choices[i]}`,
      {
        headers: {
          "x-api-key": process.env.API_NINJA_KEY,
        },
      }
    );
    if (workoutRequest.data.length === 0) {
      choices.splice(i, 1);
      i -= 1;
    } else {
      const randomWorkout =
        workoutRequest.data[
          Math.floor(Math.random() * workoutRequest.data.length)
        ];
      let workoutId = randomWorkout.name
        .replaceAll(" ", "_")
        .toLocaleLowerCase();
      workoutId.replaceAll("/", "_");
      choices[i] = {
        ...randomWorkout,
        id: workoutId,
      };
    }
    continue;
  }

  return choices;
}

async function saveUserDataToStore(cookies: Cookies) {
  const session = cookies.get("session");
  if (!session) {
    return;
  }
  const storedUserData = await User.findOne({ userAuthToken: session });
  if (storedUserData)
    return {
      username: storedUserData.username,
      height: storedUserData.height,
      weight: storedUserData.weight,
    };
}

async function loadUserDiets() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response: any = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `List five simple healthy home-made food items`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  let recipeNames: any = response.data.choices[0].text
    .split(/\r?\n/)
    .filter((val: string) => {
      return val.length !== 0;
    })
    .map((val: string) => {
      return val.slice(3);
    });
  for (var i = 0; i < recipeNames.length; i++) {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURI(
      recipeNames[i]
    )}&app_id=c77519ac&app_key=e113c75abf4611ff1a1689824704e1d0&random=true`;
    const recipeRequest = await axios.get(url);
    const recipeData =
      recipeRequest.data.hits[
        Math.floor(Math.random() * recipeRequest.data.hits.length)
      ].recipe;
    if (!recipeData) {
      recipeNames.splice(i, 1);
      i -= 1;
    } else {
      let recipeId = recipeData.label
        .replaceAll(" ", "_")
        .toLocaleLowerCase();
      recipeId.replaceAll("/", "_");
        
      recipeNames[i] = {
        id: recipeId,
        name: recipeData.label,
        thumbnail: recipeData.image,
        ingredients: recipeData.ingredientLines,
        cuisineType: recipeData.cuisineType,
        steps: recipeData.url,
        calories: recipeData.calories,
        source: recipeData.source,
        serves: recipeData.yield
      }
    }
    continue;
  }

  return recipeNames
}
