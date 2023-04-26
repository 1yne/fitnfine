import type { RequestHandler } from "@sveltejs/kit";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import User from "$lib/schema/User";
import { json } from "@sveltejs/kit";
import {
  storedWorkouts,
  storedOpenAIWorkoutResponse,
  capitalizeFirstLetter,
} from "$lib/utils";
import { allExercises } from "$lib/exerciseData.ts";
import fs from "fs";
import { dev } from "$app/environment";

export const POST: RequestHandler = async ({ url, cookies }) => {
  if (dev) {
    return json({
      exerciseData: allExercises,
      workoutData: storedWorkouts,
    })
  } else {
    const userData = await User.findOne({
      userAuthToken: cookies.get("session"),
    });
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // const options = {
    //   method: 'GET',
    //   url: 'https://exercisedb.p.rapidapi.com/exercises',
    //   headers: {
    //     'content-type': 'application/octet-stream',
    //     'X-RapidAPI-Key': process.env.WORKOUT_API_KEY,
    //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //   }
    // };

    // const exerciseDB = await axios.request(options)

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `List five simple exercises that a person weighing ${userData.weight.toString()}kg and ${userData.height.toString()}cm tall can do at home`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    let workoutChoices: string[] = response.data.choices[0].text
      ?.split(/\r?\n/)
      .filter((val) => {
        return val.length !== 0;
      })
      .map((choice) => choice.slice(3));

    let workouts = [];

    for (var i = 0; i < workoutChoices.length; i++) {
      let matches = allExercises.filter((val) =>
        val.name.includes(
          workoutChoices[i].toLocaleLowerCase().replaceAll("-", " ")
        )
      );
      if (matches.length > 5) {
        const shuffled = matches.sort(() => 0.5 - Math.random());
        matches = shuffled.slice(0, 5);
      }

      matches.forEach((match) => {
        workouts.push({
          ...match,
          name: capitalizeFirstLetter(match.name),
        });
      });
    }

    workouts = workouts.slice(0, 5);

    return json({
      exerciseData: allExercises,
      workoutData: workouts,
    });
  }
};
