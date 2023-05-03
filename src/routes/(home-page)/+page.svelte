<script lang="ts">
  import { Animation } from "@svelteuidev/motion";
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

<div
  class="h-[100vh] flex overflow-hidden bg-[url('/heroSection.svg')] bg-cover justify-between gap-6"
>
  <div
    class={`${
      windowWidth > 720 ? "w-7/12" : "w-full text-center"
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
          windowWidth > 420 ? "text-8xl" : "text-6xl"
        }`}
      >
        Time to get serious!
      </h1>
      <p
        class={`text-white mt-7 mb-10 font-nunito font-bold ${
          windowWidth > 420 ? "text-xl" : "text-lg"
        }`}
      >
        Whether you're looking to lose weight, build muscle, or simply improve
        your overall health, FITnFINE has a variety of workouts and recipes to
        suit your needs.
      </p>
      <a
        class="font-nunito bg-yellow text-white text-center py-4 w-36 rounded-lg text-lg transition-all hover:bg-yellowHover"
        href="/signup">Get Started</a
      >
    </div>
  </div>
  {#if windowWidth > 720}
    <div class="w-7/12 flex justify-center flex-col">
      <Animation duration={8} animation="float">
        <div class="flex justify-center mx-5">
          <img src="/heroSectionImage.svg" alt="" class="w-[650px]" />
        </div>
      </Animation>
    </div>
  {/if}
</div>
