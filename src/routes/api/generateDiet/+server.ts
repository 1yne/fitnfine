import type { RequestHandler } from "@sveltejs/kit";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import { json } from "@sveltejs/kit";
import { edamamResponse, openAIDietResponse } from "$lib/utils";

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const filters = data.filters.map((val: any) => val.value);

  const prompt = `List five simple healthy home-made ${
    filters.length > 0 ? `${filters.join(" ")} ` : ""
  }food items`;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response: any = await openai.createCompletion({
    model: "text-babbage-001",
    prompt,
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
    let encodedFiltersString = "";
    filters.forEach((filter: string) => {
      encodedFiltersString += `&health=${filter}`;
    });
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURI(
      recipeNames[i]
    )}&app_id=c77519ac&app_key=e113c75abf4611ff1a1689824704e1d0&random=true${encodedFiltersString}`;

    const recipeRequest = await axios.get(url);

    if (recipeRequest.data.hits.length > 0) {
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
          serves: recipeData.yield,
        };
      }
    }
    continue;
  }

  return json(recipeNames);
};
