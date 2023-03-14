<script lang="ts">
  import WorkoutCard from "$lib/components/WorkoutCard.svelte";
  import RecipeCard from "$lib/components/RecipeCard.svelte";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { userDietStore } from "$lib/stores/userDietStore";
  import { SimpleGrid, Loader, Group } from "@svelteuidev/core";
  import type { PageData } from "./$types";
  import type { UserDietStoreType, WorkoutDataType } from "$lib/types";
  export let data: PageData;

  import { onMount } from "svelte";

  let dietLoading = true,
    workoutLoading = true;

  onMount(async () => {
    if (!data.loadData) {
      let dietData: UserDietStoreType[] = $userDietStore,
        workoutData: WorkoutDataType[] = $userWorkoutDataStore;

      const dietResponse = await fetch("/api/generateDiet", {
        method: "POST",
      });
      dietData = await dietResponse.json();
      const workoutResponse = await fetch("/api/generateWorkouts", {
        method: "POST",
      });
      workoutData = await workoutResponse.json();

      userWorkoutDataStore.set(workoutData);
      userDietStore.set(dietData);

      dietLoading = false;
      workoutLoading = false;
    } else {
      dietLoading = false;
      workoutLoading = false;
    }
  });
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="p-5 text-white">
  <h1 class="text-xl font-extrabold mb-3">Recommended workouts:</h1>
  {#if !workoutLoading}
    <SimpleGrid cols={3}>
      {#if $userWorkoutDataStore.length > 0}
        {#each $userWorkoutDataStore as userWorkout}
          <WorkoutCard
            name={userWorkout.name}
            difficulty={userWorkout.difficulty}
            muscle={userWorkout.muscle}
            type={userWorkout.type}
            id={userWorkout.id}
          />
        {/each}
      {:else}
        <h1>There aren't any workouts for you! Please try again</h1>
      {/if}
    </SimpleGrid>
  {:else}
    <Group position="center">
      <Loader variant="bars" class="fill-teal" />
    </Group>
  {/if}
  <br />
  <div>
    <h1 class="text-xl font-extrabold mb-3">Recommended recipes:</h1>
    {#if !dietLoading}
      <SimpleGrid spacing="xl" cols={4}>
        {#if $userDietStore.length > 0}
          {#each $userDietStore as userDiet}
            <RecipeCard
              name={userDiet.name}
              id={userDiet.id}
              thumbnail={userDiet.thumbnail}
              calories={userDiet.calories}
              serves={userDiet.serves}
            />
          {/each}
        {:else}
          <h1>There aren't any recipes for you! Please try again</h1>
        {/if}
      </SimpleGrid>
    {:else}
      <Group position="center">
        <Loader variant="bars" class="fill-teal" />
      </Group>
    {/if}
  </div>
</div>
