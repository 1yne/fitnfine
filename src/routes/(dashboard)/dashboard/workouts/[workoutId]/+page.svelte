<script lang="ts">
  import { Card } from "@svelteuidev/core";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { page } from "$app/stores";

  const workoutData = $userWorkoutDataStore.filter(
    (val) => val.id === $page.params.workoutId
  )[0];

  $: instructions = workoutData.instructions.split(".").map((val) => {
    if (val.charAt(0) === " ") {
      val = val.substring(1);
    }
    return val;
  });
</script>

<svelte:head>
  <title>FITnFINE | {workoutData.name}</title>
</svelte:head>

<div class="px-5">
  <div class="flex justify-between text-white">
    <div class="flex items-center px-5">
      <h1 class="text-4xl mb-5">{workoutData.name}</h1>
    </div>
    <Card
      override={{ backgroundColor: "#353536", color: "white", display: "flex", justifyContent: "space-evenly", gap: "2.5rem", borderRadius: "0.5rem", "px": "1.25rem" }}
      class="hover:bg-cardBGHover transition-all"
    >
      <div class="flex flex-col">
        <h1>Difficulty: {workoutData.difficulty}</h1>
        <h1>Type: {workoutData.type}</h1>
      </div>
      <h1>Exercises the {workoutData.muscle}</h1>
    </Card>
  </div>
  <Card
    override={{ backgroundColor: "#353536", color: "white", borderRadius: "0.5rem", marginTop: "2.5rem", padding: "1.25rem" }}
    class="hover:bg-cardBGHover transition-all"
  >
    <h1 class="text-2xl">Steps:</h1>
    {#if instructions[0] !== " "}
      <ul class="mx-5 mt-3">
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
