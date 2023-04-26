<script lang="ts">
  import "../../../app.css";
  import { SvelteUIProvider } from "@svelteuidev/core";
  import DashboardSideNavbar from "$lib/components/DashboardSideNavbar.svelte";
  import DashboardTopNavbar from "$lib/components/DashboardTopNavbar.svelte";
  import { currentUserStore } from "$lib/stores/currentUser";
  import type { LayoutData } from "./$types";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import { browser } from "$app/environment";
  import "$lib/mediaQueries.css"

  export let data: LayoutData;

  $: {
    $currentUserStore = data.userData;
  }
  let windowWidth: number;

  if (browser) {
    windowWidth = window.screen.width;
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<SvelteUIProvider override={{ height: "100%", backgroundColor: "#1c1c1c" }}>
  <div class="content h-full">
    <div class="flex h-full">
      <div class="side_navbar">
        <DashboardSideNavbar />
      </div>
      <div class="w-full desktop:ml-16">
        <DashboardTopNavbar />
        <PageTransition refresh={data.pathname}>
          <div class="content pb-10 font-nunito">
            <slot />
          </div>
        </PageTransition>
      </div>
    </div>
  </div>
</SvelteUIProvider>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

  .content {
    min-height: calc(100vh - 4rem);
  }
</style>
