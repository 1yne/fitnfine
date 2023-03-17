import type { RequestHandler } from "@sveltejs/kit";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import User from "$lib/schema/User";
import { json } from "@sveltejs/kit";
import { workoutResponse } from "$lib/utils";

export const POST: RequestHandler = async ({ url, cookies }) => {
  const userData = await User.findOne({
    userAuthToken: cookies.get("session"),
  });
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
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

  return json(choices);
};
