<script lang="ts">
  import { Card, Badge } from "@svelteuidev/core";

  export let name: string, bodyPart: string, target: string;
</script>

<Card
  override={{ backgroundColor: "#353536", color: "white" }}
  class="hover:bg-cardBGHover transition-all"
>
  <div class="text-left">
    <h1 class="text-xl font-black">{name}</h1>
    <h1>Targets the {target}</h1>
  </div>
  <div class="flex justify-between">
    <div class="text-left">
      <Badge>{bodyPart}</Badge>
    </div>
  </div>
</Card>
