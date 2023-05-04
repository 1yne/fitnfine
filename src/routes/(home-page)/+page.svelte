<script lang="ts">
  import { Animation } from "@svelteuidev/motion";
</script>

<svelte:head>
  <title>FITnFINE | Time To Get Serious!</title>
  <meta
    name="description"
    content="Ever had a diet or a workout stashed away in the corner of your brain?
  Well, that's about to change!"
  />
</svelte:head>

<div
  class="h-[100vh] flex overflow-hidden bg-[url('/heroSection.svg')] bg-cover justify-between gap-6"
>
  <div class="contentWrapper flex-col flex items-center">
    <div class="w-3/4 py-5">
      <a class="cursor-pointer text-4xl text-yellow font-righteous" href="/"
        >FITnFINE</a
      >
    </div>
    <div class="w-3/4 flex flex-col textWrapper mt-16">
      <h1 class="text-orange font-righteous heading">Time to get serious!</h1>
      <p class="text-white mt-7 mb-10 font-nunito font-bold description">
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
  <div class="w-7/12 flex justify-center flex-col animation">
    <Animation duration={8} animation="float">
      <div class="flex justify-center mx-5">
        <img src="/heroSectionImage.svg" alt="" class="w-[650px]" />
      </div>
    </Animation>
  </div>
</div>

<style>
  .contentWrapper {
    width: 58.333333%;
  }
  .heading {
    font-size: 6rem;
    line-height: 1;
  }
  .description {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
</style>
