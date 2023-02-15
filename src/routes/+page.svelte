<script>
  import { Animation } from "@svelteuidev/motion";
  import Plant2 from "$lib/icons/Plant2.svelte";
  import HeroSectionBg1 from "$lib/icons/HeroSectionBG1.svelte";
</script>

<svelte:head>
  <title>FITnFINE | Time To Get Serious!</title>
</svelte:head>

<div class="heroSection flex overflow-hidden">
  <div class="w-1/2 bg-background flex-col flex">
    <div class="mt-5 mb-5 ml-20 flex-none">
      <a class="cursor-pointer text-4xl text-[#E9C46A] font-righteous" href="/"
        >FITnFINE</a
      >
    </div>
    <div class="heroSectionText pt-20 px-20 flex-none">
      <h1 class="text-7xl text-[#E76F51] font-righteous">
        Time to get serious!
      </h1>
      <p class="text-white mt-7 text-xl font-nunito font-bold">
        Ever had a diet or a workout stashed away in the corner of your brain?
        Well, that's about to change!
      </p>
      <button
        class="font-nunito bg-colorTwo px-10 py-4 rounded-lg text-white text-xl mt-7 transition-smooth hover:bg-colorTwoHover"
        >Get Started</button
      >
    </div>
    <div class="mt-10">
      <Plant2 />
    </div>
  </div>
  <div class="w-1/2 flex justify-center flex-col bg-colorTwo">
    <Animation duration={8} animation="float">
      <div class="flex justify-center mx-5">
        <HeroSectionBg1 width="600" height="2400" />
      </div>
    </Animation>
  </div>
</div>

<style>
  .heroSection {
    height: 100vh;
  }
</style>
