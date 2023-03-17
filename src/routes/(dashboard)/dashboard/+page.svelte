<script lang="ts">
  import WorkoutCard from "$lib/components/WorkoutCard.svelte";
  import RecipeCard from "$lib/components/RecipeCard.svelte";
  import CheckMark from "carbon-icons-svelte/lib/CheckmarkFilled.svelte";
  import { userWorkoutDataStore } from "$lib/stores/userWorkouts";
  import { userDietStore } from "$lib/stores/userDietStore";
  import {
    SimpleGrid,
    Loader,
    Group,
    Divider,
    Modal,
    createStyles,
    Button,
  } from "@svelteuidev/core";
  import type { PageData } from "./$types";
  import type { UserDietStoreType, WorkoutDataType } from "$lib/types";
  import { fade, fly } from 'svelte/transition';
  export let data: PageData;

  import { onMount } from "svelte";

  let dietLoading = true,
    workoutLoading = true,
    modalOpened = false,
    modalLoading = false;

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

  const useStyles = createStyles(() => ({
    ".svelteui-Modal-title": {
      fontSize: "1.3rem",
      fontFamily: "Nunito",
      color: "white"
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
    },
  }));
  $: ({ getStyles } = useStyles());

  async function loadDietData(filters: FilterChipType[]) {
    const dietResponse = await fetch("/api/generateDiet", {
      method: "POST",
      body: JSON.stringify({ filters })
    });
    let dietData = await dietResponse.json();
    return dietData
  }

  onMount(async () => {
    if (data.dontLoadData) {
      dietLoading = false;
      workoutLoading = false;
    } else {
      let dietData: UserDietStoreType[] = $userDietStore,
        workoutData: WorkoutDataType[] = $userWorkoutDataStore;

      dietData = await loadDietData([])
      dietLoading = false;

      const workoutResponse = await fetch("/api/generateWorkouts", {
        method: "POST",
      });
      workoutData = await workoutResponse.json();
      workoutLoading = false;

      userWorkoutDataStore.set(workoutData);
      userDietStore.set(dietData);

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
    modalLoading = true
    const dietData = await loadDietData(chosenFilters)
    userDietStore.set(dietData)
    modalLoading = false
    modalOpened = false
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
</script>

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
  class={`${getStyles()} font-nunito`}
>
  <h1 class="mb-1 text-lg text-white">Added filters:</h1>
  {#if chosenFilters.length > 0}
    <div class="flex gap-2 flex-wrap">
      {#each chosenFilters as chosenFilter}
        <Button
          size="xs"
          on:click={() => changeFilters(chosenFilter, "remove")}
          class="bg-cardBG border-teal hover:bg-cardBGHover transition-all border-solid border rounded-full text-white font-nunito text-[1.1rem]"
        >
          <CheckMark slot="leftIcon" class="text-teal" />
          {chosenFilter.label}
        </Button>
      {/each}
    </div>
  {:else}
    <p class="text-white">There aren't any filters added yet!</p>
  {/if}
  <Divider class="!mt-3" />
  <h1 class="mb-1 text-lg text-white">Available filters:</h1>
  {#if availableFilters.length > 0}
    <div class="flex gap-2 flex-wrap">
      {#each availableFilters as availableFilter}
        <Button
          size="xs"
          on:click={() => changeFilters(availableFilter, "add")}
          class="bg-cardBG border-black hover:bg-cardBGHover transition-all border-solid border rounded-full text-white font-nunito text-[1.1rem]"
        >
          {availableFilter.label}
        </Button>
      {/each}
    </div>
  {:else}
    <p class="text-white">There aren't any filters yet to be added!</p>
  {/if}

  <Group position="right">
		<Button on:click={saveFilters} loading={modalLoading} class="font-nunito mt-2 text-[1.1rem] bg-yellow transition-all hover:bg-yellowHover">Save</Button>
	</Group>
</Modal>

<div class="p-5 text-white">
  <h1 class="text-xl font-extrabold mb-3">Recommended workouts:</h1>
  <Divider />
  {#if !workoutLoading}
    <SimpleGrid cols={3}>
      {#if $userWorkoutDataStore.length > 0}
        {#each $userWorkoutDataStore as userWorkout, i}
          <div in:fly="{{ x: 50, duration: 750, delay: i * 75 }}">
            <WorkoutCard
              name={userWorkout.name}
              difficulty={userWorkout.difficulty}
              muscle={userWorkout.muscle}
              type={userWorkout.type}
              id={userWorkout.id}
            />
          </div>
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
      <h1 class="text-xl font-extrabold">Recommended recipes:</h1>
      <div class="flex items-center">
        <button
          class="bg-cardBG py-1 px-3 transition-all hover:bg-cardBGHover rounded-lg"
          on:click={() => (modalOpened = true)}>Add filters</button
        >
      </div>
    </div>
    <Divider />
    {#if !dietLoading}
      <SimpleGrid spacing="xl" cols={4}>
        {#if $userDietStore.length > 0}
          {#each $userDietStore as userDiet, i}
            <div in:fly="{{ x: 50, duration: 750, delay: i * 75 }}">
              <RecipeCard
                name={userDiet.name}
                id={userDiet.id}
                thumbnail={userDiet.thumbnail}
                calories={userDiet.calories}
                serves={userDiet.serves}
              />
            </div>
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
