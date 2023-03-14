<script lang="ts">
  import { Card, Divider } from "@svelteuidev/core";
  import { userDietStore } from "$lib/stores/userDietStore";
  import { page } from "$app/stores";
  import { capitalizeFirstLetter } from "$lib/utils";
  import Fire from "carbon-icons-svelte/lib/Fire.svelte";

  const dietData = $userDietStore.filter(
    (val) => val.id === $page.params.recipeId
  )[0];
</script>

<svelte:head>
  <title>FITnFINE | {dietData.name}</title>
</svelte:head>

<div>
  <div class="wrapper relative mb-5">
    <div
      class="w-full h-96 blur-md bg-cover bg-center bg-no-repeat"
      style={`background-image: url("${dietData.thumbnail}")`}
    />
    <div
      class="flex justify-between text-white absolute top-[72%] left-0 my-auto px-5 gap-5 w-full "
    >
      <div class="flex flex-col justify-center  text-darkGreen">
        <h1 class="text-5xl font-black mb-2">{dietData.name}</h1>
        <div class="flex gap-2 text-white">
          <a
            href={`https://www.${dietData.source}`}
            target="_blank"
            rel="noreferrer"
            class="transition-all hover:text-teal">{dietData.source}</a
          >
          <Divider orientation="vertical" />
          <p>Serves: {dietData.serves}</p>
          <Divider orientation="vertical" />
          <p>Cuisine: {capitalizeFirstLetter(dietData.cuisineType[0])}</p>
          <Divider orientation="vertical" />
          <div class="flex gap-1">
            <Fire size={20} />
            <h1>{Math.round(dietData.calories)} calories</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-5 mt-5">
    <Card
      override={{
        backgroundColor: "#353536",
        color: "white",
        borderRadius: "0.5rem",
        marginTop: "2.5rem",
        padding: "1.25rem",
        display: "flex",
      }}
      class="drop-shadow-lg hover:bg-cardBGHover transition-all"
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
        <a
          href={dietData.steps}
          target="_blank"
          rel="noreferrer"
          class="transition-all hover:text-teal">{dietData.steps}</a
        >
      </div>
    </Card>
  </div>
</div>
