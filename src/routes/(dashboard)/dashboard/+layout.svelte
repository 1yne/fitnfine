<!-- <script lang="ts">
  import DashboardSideNavbar from "$lib/components/DashboardSideNavbar.svelte";
  import DashboardTopNavbar from "$lib/components/DashboardTopNavbar.svelte";
  import Transition from "$lib/components/PageTransition.svelte";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { currentUserStore } from "$lib/stores/currentUser";
  import { fly } from "svelte/transition";

  import type { LayoutData } from "./$types";
  export let data: LayoutData;

  $: {
    $userWorkoutDataStore = data.userWorkoutData;
    $currentUserStore = data.userData;
  }
</script>

<div class="flex h-full">
  <DashboardSideNavbar />
  <div class="w-full ml-16">
    <DashboardTopNavbar />
    <div class="content px-5 pb-10 font-nunito">
      <slot />
    </div>
  </div>
</div> -->
<script lang="ts">
  import "../../../app.css";
  import { SvelteUIProvider } from "@svelteuidev/core";
  import DashboardSideNavbar from "$lib/components/DashboardSideNavbar.svelte";
  import DashboardTopNavbar from "$lib/components/DashboardTopNavbar.svelte";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { currentUserStore } from "$lib/stores/currentUser";
  import type { LayoutData } from "./$types";
  import PageTransition from "$lib/components/PageTransition.svelte";

  export let data: LayoutData;

  $: {
    $userWorkoutDataStore = data.userWorkoutData;
    $currentUserStore = data.userData;
  }
</script>

<SvelteUIProvider override={{ height: "100%" }}>
  <div class="content h-full">
    <div class="flex h-full">
      <DashboardSideNavbar />
      <div class="w-full ml-16">
        <DashboardTopNavbar />
        <PageTransition refresh={data.pathname}>
          <div class="content px-5 pb-10 font-nunito">
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
</style>
