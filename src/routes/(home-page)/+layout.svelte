<script lang="ts">
  import "../../app.css";
  import { SvelteUIProvider } from "@svelteuidev/core";
  import { navigating } from "$app/stores";
  import { goto } from "$app/navigation";
  import Transition from "$lib/components/PageTransition.svelte";
  import type { PageData } from "./$types";
  import { parseCookie } from "$lib/utils";

  $: if ($navigating) {
    if ($navigating.to?.route.id?.includes("dashboard")) {
      if (!document.cookie) {
        goto("/login");
      } else if (!parseCookie(document.cookie).session) {
        goto("/login");
      }
    }
  }

  export let data: PageData;
</script>

<SvelteUIProvider override={{ height: "100%" }}>
  <div class="content h-full">
    <Transition refresh={data.pathname}>
      <slot />
    </Transition>
  </div>
</SvelteUIProvider>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
</style>
