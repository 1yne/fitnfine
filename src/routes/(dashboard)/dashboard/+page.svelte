<script>
  import WorkoutCard from "$lib/components/WorkoutCard.svelte";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { SimpleGrid } from "@svelteuidev/core";
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="py-5">
  <h1 class="text-xl font-extrabold mb-3">Workouts</h1>
  <SimpleGrid cols={3}>
    {#if $userWorkoutDataStore.length > 0}
      {#each $userWorkoutDataStore as userWorkout}
        <WorkoutCard {...userWorkout} />
      {/each}
    {:else}
      <h1>There aren't any workouts for you! Please try again</h1>
    {/if}
  </SimpleGrid>
</div>
