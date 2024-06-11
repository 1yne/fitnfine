<script lang="ts">
  import WorkoutCard from "$lib/components/WorkoutCard.svelte";
  import RecipeCard from "$lib/components/RecipeCard.svelte";
  import CheckMark from "carbon-icons-svelte/lib/CheckmarkFilled.svelte";
  import Filter from "carbon-icons-svelte/lib/Filter.svelte";
  import FavoriteFilled from "carbon-icons-svelte/lib/FavoriteFilled.svelte";
  import FilterEdit from "carbon-icons-svelte/lib/FilterEdit.svelte";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { userDietStore } from "$lib/stores/userDietStore";
  import { exerciseDataStore } from "$lib/stores/exerciseData";
  import { Spinner, Modal, Button } from "flowbite-svelte";
  import type { PageData } from "./$types";
  import type { UserDietStoreType, ExerciseDataType } from "$lib/types";
  import { fly } from "svelte/transition";
  import { browser } from "$app/environment";
  export let data: PageData;

  import { onMount } from "svelte";
  import { capitalizeFirstLetter } from "$lib/utils";

  let dietLoading = true,
    workoutLoading = true,
    modalOpened = false,
    modalLoading = false,
    workoutModalLoading = false,
    activeWorkout: ExerciseDataType | null,
    imageError = false;

  let availableFilters = [
    {
      label: "Keto",
      value: "keto",
    },
    {
      label: "Vegan",
      value: "vegan",
    },
    {
      label: "Vegetarian",
      value: "vegetarian",
    },
    {
      label: "Sugar Conscious",
      value: "sugar conscious",
    },
  ];

  let chosenFilters: FilterChipType[] = [];

  async function loadDietData(filters: FilterChipType[]) {
    const dietResponse = await fetch("/api/generateDiet", {
      method: "POST",
      body: JSON.stringify({ filters }),
    });
    let dietData = await dietResponse.json();
    return dietData;
  }

  onMount(async () => {
    if (data.dontLoadData) {
      dietLoading = false;
      workoutLoading = false;
    } else {
      let dietData: UserDietStoreType[] = $userDietStore,
        workoutData: ExerciseDataType[] = $userWorkoutDataStore;

      dietData = await loadDietData([]);
      userDietStore.set(dietData);
      dietLoading = false;

      const workoutResponse = await fetch("/api/generateWorkouts", {
        method: "POST",
      });

      const data = await workoutResponse.json();
      workoutData = data.workoutData;

      const exerciseData = data.exerciseData;

      userWorkoutDataStore.set(workoutData);
      exerciseDataStore.set(exerciseData);

      workoutLoading = false;
    }
  });

  type FilterChipType = {
    label: string;
    value: string;
  };

  function closeModal() {
    modalOpened = false;
  }

  async function saveFilters() {
    modalLoading = true;
    const dietData = await loadDietData(chosenFilters);
    userDietStore.set(dietData);
    modalLoading = false;
    modalOpened = false;
  }

  function changeFilters(filter: FilterChipType, type: string) {
    if (type === "add") {
      availableFilters = availableFilters.filter(
        (val) => val.value !== filter.value
      );
      chosenFilters = chosenFilters.concat(filter);
    } else {
      chosenFilters = chosenFilters.filter((val) => val.value !== filter.value);
      availableFilters = availableFilters.concat(filter);
    }
  }

  let windowWidth: number;
  let noOfLikes = 0,
    userLikedWorkout = false;

  if (browser) {
    windowWidth = window.screen.width;
  }

  async function loadWorkoutData(workout: ExerciseDataType) {
    const workoutResponse = await fetch("/api/getWorkoutData", {
      method: "POST",
      body: JSON.stringify({ id: workout.id }),
    });
    let fetchedData = await workoutResponse.json();
    noOfLikes = fetchedData.workoutData.likes;
    userLikedWorkout = fetchedData.workoutData.likedUsers.includes(
      fetchedData.userData._id
    );
  }

  async function updateLikes(workout: ExerciseDataType) {
    let data: ExerciseDataType;
    if (!userLikedWorkout) {
      const response = await fetch("/api/updateWorkoutLikes", {
        method: "POST",
        body: JSON.stringify({
          addLikes: true,
          id: workout.id,
          likes: noOfLikes,
        }),
      });
      data = await response.json();
    } else {
      const response = await fetch("/api/updateWorkoutLikes", {
        method: "POST",
        body: JSON.stringify({
          addLikes: false,
          id: workout.id,
          likes: noOfLikes,
        }),
      });
      data = await response.json();
    }
    noOfLikes = data.likes;
    userLikedWorkout = !userLikedWorkout;
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<Modal
  bind:open={modalOpened}
  on:close={closeModal}
  title="Filters:"
  classHeader="bg-background text-white header"
  classFooter="bg-background text-white !border-t !border-gray-500 justify-end"
  classBody="!border-t !border-gray-500"
  class="font-nunito bg-background"
  outsideclose
>
  <h1 class="mb-1 text-lg text-white">Added filters:</h1>
  {#if chosenFilters.length > 0}
    <div class="flex gap-2 flex-wrap">
      {#each chosenFilters as chosenFilter}
        <Button
          size="sm"
          on:click={() => changeFilters(chosenFilter, "remove")}
          color="green"
          class="hover:!bg-cardBGHover transition-all bg-cardBG border-solid border border-teal"
        >
          <CheckMark class="text-teal mr-2" />
          {chosenFilter.label}
        </Button>
      {/each}
    </div>
  {:else}
    <p class="text-white">There aren't any filters added yet!</p>
  {/if}
  <hr class="mb-4 mt-3 border-gray-700" />
  <h1 class="mb-1 text-lg text-white">Available filters:</h1>
  {#if availableFilters.length > 0}
    <div class="flex gap-2 flex-wrap">
      {#each availableFilters as availableFilter}
        <Button
          size="sm"
          on:click={() => changeFilters(availableFilter, "add")}
          color="green"
          class="hover:!bg-cardBGHover transition-all bg-cardBG"
        >
          {availableFilter.label}
        </Button>
      {/each}
    </div>
  {:else}
    <p class="text-white">There aren't any filters yet to be added!</p>
  {/if}

  <svelte:fragment slot="footer">
    <Button
      on:click={saveFilters}
      size="sm"
      color="green"
      class="bg-yellow hover:!bg-yellowHover text-black transition-all"
    >
      {#if modalLoading}
        <Spinner size="4" class="mr-2" color="white" />
      {/if}
      Save
    </Button>
  </svelte:fragment>
</Modal>

<Modal
  bind:open={workoutModalLoading}
  on:close={() => {
    activeWorkout = null;
    workoutModalLoading = false;
  }}
  class="font-nunito"
  classHeader="bg-background text-white header"
  classBody="bg-background !border-t !border-gray-500"
  title={activeWorkout?.name}
  outsideclose
>
  {#if activeWorkout}
    <div
      class="flex h-full gap-8 workoutModalDesktop:justify-between workoutModalMobile:flex-col items-start"
    >
      {#if imageError}
        <div class="h-full">
          <img
            src={activeWorkout.gifUrl}
            alt={activeWorkout.name}
            class="rounded-lg"
            on:error={() => (imageError = true)}
          />
        </div>
      {/if}
      <div class="text-white w-full text-left text-lg">
        <h1>Exercises the {activeWorkout.target}</h1>
        <h1>
          Equipment needed: {capitalizeFirstLetter(activeWorkout.equipment)}
        </h1>
        <div
          class="flex workoutModalMobile:justify-start workoutModalDesktop:justify-end"
        >
          <button
            class="flex gap-4 text-white bg-cardBG hover:bg-cardBGHover transition-all py-2 px-4 rounded-lg"
            on:click={() => {
              if (activeWorkout) {
                updateLikes(activeWorkout);
              }
            }}
          >
            <FavoriteFilled
              size={24}
              class={`transition-all ${
                userLikedWorkout ? "fill-teal" : "fill-gray-500"
              }`}
            />
            {noOfLikes}
          </button>
        </div>
      </div>
    </div>
  {/if}
</Modal>

<div class="p-5 pt-0 text-white">
  <h1 class="text-xl my-3">Recommended workouts:</h1>
  <hr class="mb-4" />
  {#if !workoutLoading}
    <div class="transition-all w-full grid gap-4 cardGridDashboardW">
      {#if $userWorkoutDataStore.length > 0 && !workoutLoading}
        {#each $userWorkoutDataStore as userWorkout, i}
          {#if userWorkout.name}
            <button
              in:fly|global={{ x: 50, duration: 750, delay: i * 75 }}
              on:click={() => {
                activeWorkout = userWorkout;
                workoutModalLoading = true;
                loadWorkoutData(userWorkout);
              }}
            >
              <WorkoutCard {...userWorkout} />
            </button>
          {/if}
        {/each}
      {:else}
        <h1>There aren't any workouts for you! Please try again</h1>
      {/if}
    </div>
  {:else}
    <div class="w-full flex justify-center">
      <Spinner class="fill-teal" />
    </div>
  {/if}
  <br />
  <div>
    <div class="flex justify-between">
      <h1 class="text-xl">Recommended recipes:</h1>
      <div class="flex items-center">
        <button
          class="py-1 px-3 transition-all hover:text-tealHover rounded-lg"
          on:click={() => (modalOpened = true)}
        >
          {#if chosenFilters.length == 0}
            <Filter size={24} />
          {:else}
            <FilterEdit size={24} />
          {/if}
        </button>
      </div>
    </div>
    <hr class="mb-4 mt-2" />
    {#if !dietLoading}
      <div class="transition-all w-full grid gap-4 cardGridDashboardR">
        {#if $userDietStore.length > 0 && !dietLoading}
          {#each $userDietStore as userDiet, i}
            {#if userDiet.name}
              <div in:fly|global={{ x: 50, duration: 750, delay: i * 75 }}>
                <RecipeCard
                  name={userDiet.name}
                  id={userDiet.id}
                  thumbnail={userDiet.thumbnail}
                  calories={userDiet.calories}
                  serves={userDiet.serves}
                />
              </div>
            {/if}
          {/each}
        {:else}
          <h1>There aren't any recipes for you! Please try again</h1>
        {/if}
      </div>
    {:else}
      <div class="w-full flex justify-center">
        <Spinner class="fill-teal" />
      </div>
    {/if}
  </div>
</div>

<style>
  @media (min-width: 800px) {
    .cardGridDashboardW {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (500px <= width <= 799) {
    .cardGridDashboardW {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 499px) {
    .cardGridDashboardW {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 680px) {
    .cardGridDashboardR {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (500px <= width <= 679) {
    .cardGridDashboardR {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (350px <= width <= 499px) {
    .cardGridDashboardR {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 349px) {
    .cardGridDashboardR {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  :global(.header > button:hover) {
    background-color: #494a4a;
  }
</style>
