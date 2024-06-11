<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Fire from "carbon-icons-svelte/lib/Fire.svelte";

  export let name: string,
    id: string,
    thumbnail: string,
    calories: number,
    serves: number;
</script>

<Card
  class="hover:bg-cardBGHover transition-all cursor-pointer bg-cardBG border-none p-4 text-white"
>
  <button on:click={() => goto(`/dashboard/recipes/${id}`)} class="w-full">
    <img src={thumbnail} alt="" class="w-full max-h-40 rounded-md border-none" />
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
