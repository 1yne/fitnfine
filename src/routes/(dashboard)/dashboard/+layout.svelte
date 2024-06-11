<script lang="ts">
  import "../../../app.css";
  import DashboardSideNavbar from "$lib/components/DashboardSideNavbar.svelte";
  import DashboardTopNavbar from "$lib/components/DashboardTopNavbar.svelte";
  import { currentUserStore } from "$lib/stores/currentUser";
  import type { LayoutData } from "./$types";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import "$lib/mediaQueries.css";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });

  export let data: LayoutData;

  $: {
    $currentUserStore = data.userData;
  }
</script>

<div class="content h-full bg-background">
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

<style>
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

  .content {
    min-height: calc(100vh - 4rem);
  }
</style>
