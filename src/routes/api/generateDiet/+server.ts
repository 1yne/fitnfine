import type { RequestHandler } from "@sveltejs/kit";
import OpenAIModule from "openai";
import axios from "axios";
import { json } from "@sveltejs/kit";
import { storedEdamamResponse } from "$lib/utils";
import { dev } from "$app/environment";

export const POST: RequestHandler = async ({ request }) => {
  if (dev) {
    return json(storedEdamamResponse);
  } else {
    const data = await request.json();
    const filters = data.filters.map((val: any) => val.value);

    const prompt = `List five simple healthy home-made ${
      filters.length > 0 ? `${filters.join(" ")} ` : ""
    }food items`;

    const openai = new OpenAIModule({
      apiKey: process.env.OPENAI_KEY
    })

    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    let recipeChoices: string[] = response.choices[0].text
      .split(/\r?\n/)
      .filter((val: string) => {
        return val.length !== 0;
      })
      .map((val: string) => {
        return val.slice(3);
      });

    let recipes = [];

    for (var i = 0; i < recipeChoices.length; i++) {
      let encodedFiltersString = "";
      filters.forEach((filter: string) => {
        encodedFiltersString += `&health=${filter}`;
      });
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURI(
        recipeChoices[i]
      )}&app_id=c77519ac&app_key=${
        process.env.RECIPE_KEY
      }&random=true${encodedFiltersString}`;

      const recipeRequest = await axios.get(url);

      if (recipeRequest.data.hits.length > 0) {
        const recipeData =
          recipeRequest.data.hits[
            Math.floor(Math.random() * recipeRequest.data.hits.length)
          ].recipe;

        let recipeId = recipeData.label
          .replaceAll(" ", "_")
          .toLocaleLowerCase();
        recipeId.replaceAll("/", "_");

        const recipeObj = {
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

        recipes.push(recipeObj);
      }
      continue;
    }

    return json(recipes);
  }
};
