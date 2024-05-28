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
  import {
    SimpleGrid,
    Loader,
    Group,
    Divider,
    Modal,
    createStyles,
    Button,
    Badge,
    Card,
  } from "@svelteuidev/core";
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

  const dietFilterStyles = createStyles(() => ({
    ".svelteui-Modal-title": {
      fontSize: "1.3rem",
      fontFamily: "Nunito",
      color: "white",
    },
    ".svelteui-Modal-close > svg": {
      size: "1.5rem",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms",
      borderRadius: "0.5rem",
    },
    ".svelteui-Modal-close:hover": {
      backgroundColor: "#1c1c1c",
    },
    ".svelteui-Modal-close > svg:hover": {
      size: "1.5rem",
      color: "#029987",
    },
    ".svelteui-Modal-header": {
      marginBottom: "8px",
    },
    ".svelteui-Modal-modal": {
      backgroundColor: "#1c1c1c !important",
      width: "auto",
      maxWidth: "440px",
    },
  }));
  $: ({ getStyles: getDietFilterStyles } = dietFilterStyles());

  const workoutModalStyles = createStyles(() => ({
    ".svelteui-Modal-modal": {
      backgroundColor: "#1c1c1c !important",
    },
  }));
  $: ({ getStyles: getWorkoutModalStyles } = workoutModalStyles());

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
  opened={modalOpened}
  on:close={closeModal}
  title="Filters:"
  centered
  overlayColor="#264653"
  overlayOpacity={0.55}
  overlayBlur={3}
  class={`${getDietFilterStyles()} font-nunito`}
>
  <h1 class="mb-1 text-lg text-white">Added filters:</h1>
  {#if chosenFilters.length > 0}
    <div class="flex gap-2 flex-wrap">
      {#each chosenFilters as chosenFilter}
        <Button
          size="xs"
          on:click={() => changeFilters(chosenFilter, "remove")}
          override={{
            backgroundColor: "#353536",
            border: "#029987 1px solid",
            borderRadius: "999px",
            color: "white",
            fontFamily: "Nunito",
            fontSize: "1.1rem",
          }}
          class="hover:!bg-cardBGHover transition-all"
        >
          <CheckMark slot="leftIcon" class="text-teal" />
          {chosenFilter.label}
        </Button>
      {/each}
    </div>
  {:else}
    <p class="text-white">There aren't any filters added yet!</p>
  {/if}
  <Divider override={{ mt: "0.75rem !important" }} />
  <h1 class="mb-1 text-lg text-white">Available filters:</h1>
  {#if availableFilters.length > 0}
    <div class="flex gap-2 flex-wrap">
      {#each availableFilters as availableFilter}
        <Button
          size="xs"
          on:click={() => changeFilters(availableFilter, "add")}
          override={{
            backgroundColor: "#353536",
            border: "black 1px solid",
            borderRadius: "999px",
            color: "white",
            fontFamily: "Nunito",
            fontSize: "1.1rem",
          }}
          class="hover:!bg-cardBGHover transition-all"
        >
          {availableFilter.label}
        </Button>
      {/each}
    </div>
  {:else}
    <p class="text-white">There aren't any filters yet to be added!</p>
  {/if}

  <Group position="right">
    <Button
      on:click={saveFilters}
      loading={modalLoading}
      override={{
        fontFamily: "Nunito",
        mt: "0.5rem",
        fontSize: "1.1rem",
        backgroundColor: "#e6b335",
      }}
      class="transition-all hover:!bg-yellowHover">Save</Button
    >
  </Group>
</Modal>

<Modal
  opened={workoutModalLoading}
  on:close={() => {
    activeWorkout = null;
    workoutModalLoading = false;
  }}
  class={`${getWorkoutModalStyles()} font-nunito`}
  centered
  overlayColor="#264653"
  overlayOpacity={0.55}
  overlayBlur={3}
  withCloseButton={false}
  size="full"
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
      <div class="text-white w-full text-left">
        <Card
          override={{
            backgroundColor: "#353536",
            color: "white",
            width: "100%",
          }}
        >
          <div class="flex w-full gap-4">
            <h1 class="text-4xl">{activeWorkout.name}</h1>
            <div class="flex items-center">
              <Badge>{activeWorkout.bodyPart}</Badge>
            </div>
          </div>
        </Card>
        <Card
          override={{
            backgroundColor: "rgba(53, 53, 54, 0.5)",
            color: "white",
            width: "100%",
            my: "0.75rem",
          }}
        >
          <h1 class="text-xl">Exercises the {activeWorkout.target}</h1>
          <h1 class="text-lg">
            Equipment needed: {capitalizeFirstLetter(activeWorkout.equipment)}
          </h1>
        </Card>
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
  <Divider />
  {#if !workoutLoading}
    <SimpleGrid
      cols={windowWidth > 800 ? 3 : windowWidth > 500 ? 2 : 1}
      class="transition-all"
    >
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
    </SimpleGrid>
  {:else}
    <Group position="center">
      <Loader variant="bars" class="fill-teal" />
    </Group>
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
    <Divider />
    {#if !dietLoading}
      <SimpleGrid
        cols={windowWidth > 680
          ? 4
          : windowWidth > 500
            ? 3
            : windowWidth > 350
              ? 2
              : 1}
        class="transition-all"
      >
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
      </SimpleGrid>
    {:else}
      <Group position="center">
        <Loader variant="bars" class="fill-teal" />
      </Group>
    {/if}
  </div>
</div>
