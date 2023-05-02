<script lang="ts">
  import { Animation } from "@svelteuidev/motion";
  import Plant2 from "$lib/icons/Plant2.svelte";
  import HeroSectionBg1 from "$lib/icons/HeroSectionBG1.svelte";
  import { browser } from "$app/environment";
  let windowWidth: number;
  if (browser) {
    windowWidth = window.innerWidth;
  }
</script>

<svelte:head>
  <title>FITnFINE | Time To Get Serious!</title>
  <meta
    name="description"
    content="Ever had a diet or a workout stashed away in the corner of your brain?
  Well, that's about to change!"
  />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div class="h-[100vh] flex overflow-hidden">
  <div
    class={`${
      windowWidth > 720 ? "w-1/2" : "w-full text-center"
    } flex-col flex items-center`}
  >
    <div class="w-3/4 py-5">
      <a class="cursor-pointer text-4xl text-yellow font-righteous" href="/"
        >FITnFINE</a
      >
    </div>
    <div
      class={`w-3/4 flex flex-col ${
        windowWidth > 720 ? "" : "items-center"
      } mt-16`}
    >
      <h1
        class={`text-orange font-righteous ${
          windowWidth > 420 ? "text-7xl" : "text-5xl"
        }`}
      >
        Time to get serious!
      </h1>
      <p
        class={`text-white mt-7 mb-10 font-nunito font-bold ${
          windowWidth > 420 ? "text-xl" : "text-lg"
        }`}
      >
        Elevate your at-home wellness routine with personalized workout and
        recipes, designed by our AI to help you reach your full potential.
      </p>
      <a
        class="font-nunito bg-teal text-white text-center py-4 w-36 rounded-lg text-lg transition-all hover:bg-tealHover"
        href="/signup">Get Started</a
      >
    </div>
    <div class="mt-10">
      <Plant2 />
    </div>
  </div>
  {#if windowWidth > 720}
    <div class="w-1/2 flex justify-center flex-col">
      <Animation duration={8} animation="float">
        <div class="flex justify-center mx-5">
          <HeroSectionBg1 width="600" height="2400" />
        </div>
      </Animation>
    </div>
  {/if}
</div>
