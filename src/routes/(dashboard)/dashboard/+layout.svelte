<script lang="ts">
  import "../../../app.css";
  import { SvelteUIProvider } from "@svelteuidev/core";
  import DashboardSideNavbar from "$lib/components/DashboardSideNavbar.svelte";
  import DashboardTopNavbar from "$lib/components/DashboardTopNavbar.svelte";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { currentUserStore } from "$lib/stores/currentUser";
  import { userDietsStore } from "$lib/stores/userDiets";
  import type { LayoutData } from "./$types";
  import PageTransition from "$lib/components/PageTransition.svelte";

  export let data: LayoutData;

  $: {
    $userWorkoutDataStore = data.userWorkoutData;
    $currentUserStore = data.userData;
    $userDietsStore = data.userDiets
  }
</script>

<SvelteUIProvider override={{ height: "100%", backgroundColor: "#1c1c1c" }}>
  <div class="content h-full">
    <div class="flex h-full">
      <DashboardSideNavbar />
      <div class="w-full ml-16">
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
