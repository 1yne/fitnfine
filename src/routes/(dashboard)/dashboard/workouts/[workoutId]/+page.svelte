<script lang="ts">
  import { Card, Divider } from "@svelteuidev/core";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";

  const workoutData = $userWorkoutDataStore.filter(
    (val) => val.id === $page.params.workoutId
  )[0];

  $: instructions = workoutData.instructions.split(".").map((val) => {
    if (val.charAt(0) === " ") {
      val = val.substring(1);
    }
    return val;
  });
  let windowWidth = browser && window.screen.width;
</script>

<svelte:head>
  <title>FITnFINE | {workoutData.name}</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div class="px-5">
  <div class="flex justify-between text-white mobile:mt-7">
    <div class="flex justify-center px-5 mobile:flex-col">
      <h1 class="text-4xl mb-5 transition-all">{workoutData.name}</h1>
      {#if windowWidth <= 715}
        <div class="flex gap-2 text-white">
          <p>Difficulty: {workoutData.difficulty}</p>
          <Divider orientation="vertical" />
          <p>Type: {workoutData.type}</p>
          <Divider orientation="vertical" />
          <p>Exercises the {workoutData.muscle} calories</p>
        </div>
      {/if}
    </div>
    {#if windowWidth > 715}
      <Card
        override={{
          backgroundColor: "#353536",
          color: "white",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "2.5rem",
          borderRadius: "0.5rem",
          px: "1.25rem",
          ml: "2rem",
          minWidth: "2rem",
        }}
        class="hover:bg-cardBGHover transition-all"
      >
        <div class="flex flex-col">
          <h1>Difficulty: {workoutData.difficulty}</h1>
          <h1>Type: {workoutData.type}</h1>
        </div>
        <h1>Exercises the {workoutData.muscle}</h1>
      </Card>
    {/if}
  </div>
  <Card
    override={{
      backgroundColor: "#353536",
      color: "white",
      borderRadius: "0.5rem",
      marginTop: windowWidth > 715 ? "2.5rem" : "2rem",
      padding: "1.25rem",
    }}
    class="hover:bg-cardBGHover transition-all"
  >
    <h1 class="text-2xl">Steps:</h1>
    {#if instructions[0].length !== 0}
      <ul class={`${windowWidth > 500 ? "mx-5" : "mx-0"} transition-all mt-3`}>
        {#each instructions as instruction, i}
          {#if instruction.length > 0}
            <li class="text-md">{i + 1}: {instruction}</li>
          {/if}
        {/each}
      </ul>
    {:else}
      <p class="mt-2">There aren't any steps for this workout!</p>
    {/if}
  </Card>
</div>
