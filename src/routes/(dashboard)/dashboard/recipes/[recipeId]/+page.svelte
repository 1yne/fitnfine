<script lang="ts">
  import { Card, Divider } from "@svelteuidev/core";
  import { userDietStore } from "$lib/stores/userDietStore";
  import { page } from "$app/stores";
  import { capitalizeFirstLetter } from "$lib/utils";
  import Fire from "carbon-icons-svelte/lib/Fire.svelte";
  import { browser } from "$app/environment";

  const dietData = $userDietStore.filter(
    (val) => val.id === $page.params.recipeId
  )[0];

  let windowWidth: number

  if (browser) {
    windowWidth = window.screen.width;
  }
</script>

<svelte:head>
  <title>FITnFINE | {dietData.name}</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div>
  <div class="mb-4">
    <div
      class="w-full h-96 backdrop-blur-md bg-cover bg-center bg-white bg-no-repeat"
      style={`background-image: url("${dietData.thumbnail}")`}
    >
      <div class="backdrop-blur-md h-full flex items-end">
        <div class="flex flex-col mt-auto text-darkGreen z-20 px-5 mb-5">
          <h1 class="text-[250%] leading-10 font-black mb-2">{dietData.name}</h1>
          <div class="flex gap-2 text-white flex-wrap">
            <div class="flex">
              <a
                href={`https://www.${dietData.source}`}
                target="_blank"
                rel="noreferrer"
                class="transition-all hover:text-teal mr-2">{dietData.source}</a
              >
              <Divider orientation="vertical" />
            </div>
            <div class="flex">
              <p class="mr-2">Serves: {dietData.serves}</p>
              <Divider orientation="vertical" />
            </div>
            <div class="flex">
              <p class="mr-2">Cuisine: {capitalizeFirstLetter(dietData.cuisineType[0])}</p>
              <Divider orientation="vertical" />
            </div>
            <div class="flex gap-1">
              <Fire size={20} />
              <h1>{Math.round(dietData.calories)} calories</h1>
            </div>
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
      class={`drop-shadow-lg hover:bg-cardBGHover transition-all ${windowWidth <= 465 ? "flex flex-col gap-5" : "flex gap-4"}`}
    >
      <div class={`${windowWidth > 465 ? "w-4/6" : "w-full"}`}>
        <h1 class="text-2xl">Ingredients:</h1>
        <ul class={`${windowWidth > 465 ? "mx-2" : "mx-0"} mt-3`}>
          {#each dietData.ingredients as ingredient, i}
            <li class="text-md">{ingredient}</li>
          {/each}
        </ul>
      </div>
      <div class={`${windowWidth > 465 ? "w-2/6" : "w-full"}`}>
        <h1 class="text-2xl mb-2">Steps:</h1>
        <a
          href={dietData.steps}
          target="_blank"
          rel="noreferrer"
          class={`transition-all text-teal hover:text-tealHover mt-2 break-words`}>{dietData.steps}</a
        >
      </div>
    </Card>
  </div>
</div>
