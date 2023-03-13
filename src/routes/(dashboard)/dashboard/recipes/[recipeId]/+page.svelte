<script lang="ts">
  import { Card } from "@svelteuidev/core";
  import { userDietsStore } from "$lib/stores/userDiets";
  import { page } from "$app/stores";
  import { capitalizeFirstLetter } from "$lib/utils";

  const dietData = $userDietsStore.filter(
    (val) => val.id === $page.params.recipeId
  )[0];
</script>

<svelte:head>
  <title>FITnFINE | {dietData.name}</title>
</svelte:head>

<div>
  <div class="wrapper relative">
    <div class="w-full h-96 blur-md bg-cover bg-center bg-no-repeat" style={`background-image: url("${dietData.thumbnail}")`} />
    <div class="flex justify-between text-white absolute top-[65%] left-0 my-auto px-5 gap-5 w-full">
      <div class="flex items-center w-9/12 text-cardBG">
        <h1 class="text-5xl font-black mb-5">{dietData.name}</h1>
      </div>
      <Card
        override={{ backgroundColor: "#353536", color: "white" }}
        class="flex justify-between gap-7 drop-shadow-lg rounded-lg hover:bg-cardBGHover transition-all px-5"
      >
        <div class="flex flex-col">
          <h1>Cuisine: {capitalizeFirstLetter(dietData.cuisineType[0])}</h1>
          <h1>Calories: {Math.round(dietData.calories)}</h1>
        </div>
        <div class="flex flex-col">
          <h1>Serves {dietData.serves}</h1>
          <h1>Source: <a href={`https://www.${dietData.source}`} target="_blank" rel="noreferrer" class="transition-all hover:text-teal">{dietData.source}</a></h1>
        </div>
      </Card>
    </div>
  </div>
  <div class="px-5">
    <Card
      override={{ backgroundColor: "#353536", color: "white" }}
      class="rounded-lg drop-shadow-lg mt-10 px-5 py-5 hover:bg-cardBGHover transition-all flex"
    >
      <div class="w-4/6">
        <h1 class="text-2xl">Ingredients:</h1>
        <ul class="mx-5 mt-3">
          {#each dietData.ingredients as ingredient, i}
            <li class="text-md">{ingredient}</li>
          {/each}
        </ul>
      </div>
      <div class="w-2/6">
        <h1 class="text-2xl">Steps:</h1>
        <a href={dietData.steps} target="_blank" rel="noreferrer" class="transition-all hover:text-teal">{dietData.steps}</a>
      </div>
    </Card>
  </div>
</div>