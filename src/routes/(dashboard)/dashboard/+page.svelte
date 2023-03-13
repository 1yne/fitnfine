<script lang="ts">
  import WorkoutCard from "$lib/components/WorkoutCard.svelte";
  import RecipeCard from "$lib/components/RecipeCard.svelte";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { userDietsStore } from "$lib/stores/userDiets";
  import { SimpleGrid, Loader, Group } from "@svelteuidev/core";
  import type { PageData } from "./$types";
  export let data: PageData;

  import { onMount } from "svelte";

  let loading = true;

  onMount(async () => {
    if (!data.loadData) {
      loading = true;
      const dietResponse = await fetch("/api/generateDiet", {
        method: "POST",
      });
      const dietData = await dietResponse.json();
      const workoutResponse = await fetch("/api/generateWorkouts", {
        method: "POST",
      });
      const workoutData = await workoutResponse.json();
      $userWorkoutDataStore = workoutData;
      $userDietsStore = dietData;
      loading = false;
    }
  });
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="p-5 text-white">
  {#if !loading}
    <h1 class="text-xl font-extrabold mb-3">Recommended workouts:</h1>
    <SimpleGrid cols={3}>
      {#if $userWorkoutDataStore.length > 0}
        {#each $userWorkoutDataStore as userWorkout}
          <WorkoutCard {...userWorkout} />
        {/each}
      {:else}
        <h1>There aren't any workouts for you! Please try again</h1>
      {/if}
    </SimpleGrid>
    <br />
    <div>
      <h1 class="text-xl font-extrabold mb-3">Recommended recipes:</h1>
      <SimpleGrid spacing="xl" cols={4}>
        {#if $userDietsStore.length > 0}
          {#each $userDietsStore as userDiet}
            <RecipeCard {...userDiet} />
          {/each}
        {:else}
          <h1>There aren't any recipes for you! Please try again</h1>
        {/if}
      </SimpleGrid>
    </div>
  {:else}
    <Group position="center">
      <Loader variant="bars" class="fill-teal" />
    </Group>
  {/if}
</div>
