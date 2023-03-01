<script>
  import { Animation } from "@svelteuidev/motion";
  import Plant2 from "$lib/icons/Plant2.svelte";
  import HeroSectionBg1 from "$lib/icons/HeroSectionBG1.svelte";
</script>

<svelte:head>
  <title>FITnFINE | Time To Get Serious!</title>
  <meta
    name="description"
    content="Ever had a diet or a workout stashed away in the corner of your brain?
  Well, that's about to change!"
  />
</svelte:head>

<div class="h-[100vh] flex overflow-hidden background">
  <div class="w-1/2 flex-col flex items-center bg-blackBackground">
    <div class="w-3/4 py-5">
      <a class="cursor-pointer text-4xl text-logo font-righteous" href="/"
        >FITnFINE</a
      >
    </div>
    <div class="w-3/4 flex gap-5 flex-col mt-16">
      <h1 class="text-7xl text-orangeText font-righteous">
        Time to get serious!
      </h1>
      <p class="text-white mt-7 mb-10 text-xl font-nunito font-bold">
        Elevate your at-home wellness routine with personalized workout and
        recipes, designed by our AI to help you reach your full potential.
      </p>
      <a
        class="font-nunito bg-secondBackground text-white text-center py-4 w-1/3 rounded-lg text-lg transition-all hover:bg-secondBackgroundHover"
        href="/signup">Get Started</a
      >
    </div>
    <div class="mt-10">
      <Plant2 />
    </div>
  </div>
  <div class="w-1/2 flex justify-center flex-col bg-blackBackground">
    <Animation duration={8} animation="float">
      <div class="flex justify-center mx-5">
        <HeroSectionBg1 width="600" height="2400" />
      </div>
    </Animation>
  </div>
</div>
