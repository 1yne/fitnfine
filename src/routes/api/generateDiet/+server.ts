import type { RequestHandler } from "@sveltejs/kit";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import { json } from "@sveltejs/kit";
import { edamamResponse } from "$lib/utils";

export const POST: RequestHandler = async () => {
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
      let recipeId = recipeData.label.replaceAll(" ", "_").toLocaleLowerCase();
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
        serves: recipeData.yield,
      };
    }
    continue;
  }

  return json(recipeNames);
};
