<script lang="ts">
  import Logo from "$lib/icons/Logo.svelte";
</script>

<svelte:head>
  <title>FITnFINE | Time To Get Serious!</title>
  <meta
    name="description"
    content="Ever had a diet or a workout stashed away in the corner of your brain?
  Well, that's about to change!"
  />
</svelte:head>

<div class="h-screen bg-darkBG">
  <div class="nav w-full bg-darkBG py-6 px-12">
    <a class="text-4xl text-yellow" href="/"
      ><Logo size="48" /></a
    >
  </div>
  <div class="flex bg-darkBG justify-between">
    <div class="contentWrapper w-1/2 flex-col flex items-center">
      <div class="w-3/4 flex flex-col textWrapper mt-16">
        <h1 class="text-orange font-righteous heading uppercase text-8xl">
          Time to get serious
        </h1>
        <p class="text-white mt-7 mb-10 font-nunito description text-xl">
          Whether you're looking to lose weight, build muscle, or simply improve
          your overall health, FITnFINE has a variety of workouts and recipes to
          suit your needs.
        </p>
        <a
          class="font-righteous signup bg-yellow uppercase text-white text-center py-4 rounded-lg w-48 transition-all"
          href="/signup">Get Started</a
        >
      </div>
    </div>
    <div class=" flex justify-center flex-col p-12">
      <img src="/heroSectionImage.png" alt="" class="w-[44rem]">
    </div>
  </div>
</div>

<style>
  .signup {
    box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2), 0 6px 50px 0 rgba(255, 255, 255, 0.4);
  }
  .signup:hover {
    box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.25), 0 6px 50px 0 rgba(255, 255, 255, 0.5);
  }
</style>