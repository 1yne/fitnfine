<script lang="ts">
  import { Card, Badge } from "flowbite-svelte";

  export let name: string, bodyPart: string, target: string;
</script>

<Card
  class="hover:bg-cardBGHover transition-all bg-cardBG border-none p-4 text-white"
>
  <div class="text-left mb-1">
    <h1 class="text-xl font-black mb">{name}</h1>
    <h1>Targets the {target}</h1>
  </div>
  <div class="flex justify-between">
    <div class="text-left">
      <Badge class="bg-teal uppercase text-white" border color="green">{bodyPart}</Badge>
    </div> 
  </div>
</Card>
