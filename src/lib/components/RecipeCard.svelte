<script lang="ts">
  import { Card } from "@svelteuidev/core";
  import { goto } from "$app/navigation";
  import Fire from "carbon-icons-svelte/lib/Fire.svelte";

  export let name: string,
    id: string,
    thumbnail: string,
    calories: number,
    serves: number;
</script>

<Card
  override={{ backgroundColor: "#353536", color: "white" }}
  class="hover:bg-cardBGHover transition-all cursor-pointer"
>
  <button on:click={() => goto(`/dashboard/recipes/${id}`)} class="w-full">
    <img src={thumbnail} alt="" class="w-full max-h-40 rounded-md" />
    <div class="my-4 flex flex-col items-center w-full text-center gap-4">
      <h1 class="text-xl">{name}</h1>
      <div class="flex justify-center w-full gap-4">
        <h1>Serves {serves}</h1>
        <div class="flex gap-1">
          <Fire size={20} />
          <h1>{Math.round(calories)}</h1>
        </div>
      </div>
    </div>
  </button>
</Card>
