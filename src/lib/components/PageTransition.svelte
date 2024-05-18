<script lang="ts">
  import { fly } from "svelte/transition";
  export let refresh: any;
</script>

{#key refresh}
  <div
    in:fly|global={{ x: -5, duration: 400, delay: 400 }}
    out:fly|global={{ x: 5, duration: 400 }}
  >
    <slot />
  </div>
{/key}
