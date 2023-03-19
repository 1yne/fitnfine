<script lang="ts">
  import { Card } from "@svelteuidev/core";
  import CardioIcon from "$lib/icons/CardioIcon.svelte";
  import WeightLiftingIcon from "$lib/icons/WeightLiftingIcon.svelte";
  import StretchingIcon from "$lib/icons/StretchingIcon.svelte";
  import PlyometricsIcon from "$lib/icons/PlyometricsIcon.svelte";
  import { goto } from "$app/navigation";

  export let name: string,
    difficulty: string,
    muscle: string,
    type: string,
    id: string;
  let icon: any;
  $: {
    switch (type) {
      case "cardio":
        icon = CardioIcon;
        break;
      case "powerlifting":
        icon = WeightLiftingIcon;
        break;
      case "olympic_weightlifting":
        icon = WeightLiftingIcon;
        break;
      case "strongman":
        icon = WeightLiftingIcon;
        break;
      case "strength":
        icon = WeightLiftingIcon;
        break;
      case "stretching":
        icon = StretchingIcon;
        break;
      case "plyometrics":
        icon = PlyometricsIcon;
    }
  }
</script>

<Card
  override={{ backgroundColor: "#353536", color: "white" }}
  class="hover:bg-cardBGHover transition-all cursor-pointer"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={() => goto(`/dashboard/workouts/${id}`)}>
    <div class="flex justify-between mb-3">
      <div class="bg-yellow rounded-lg p-2 w-16 flex justify-center">
        <svelte:component this={icon} size="25" fill="#029987" />
      </div>
      <div class="text-right mobile:hidden">
        <h1
          class={`${
            difficulty === "beginner"
              ? "text-emerald-500"
              : difficulty === "intermediate"
              ? "text-yellow"
              : "text-rose-500"
          }`}
        >
          {difficulty}
        </h1>
        <div>Type: {type}</div>
      </div>
    </div>
    <div class="">
      <h1 class="text-xl font-black">{name}</h1>
      <h1>Exercises the {muscle}</h1>
    </div>
  </div>
</Card>
