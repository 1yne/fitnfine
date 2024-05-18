<script lang="ts">
  import { currentUserStore } from "$lib/stores/currentUser";
  import {
    Card,
    Button,
    SimpleGrid,
    Modal,
    createStyles,
    Badge,
    Divider,
    Loader,
    Group,
  } from "@svelteuidev/core";
  import Edit from "carbon-icons-svelte/lib/Edit.svelte";
  import type { PageData } from "./$types";
  import type { ExerciseDataType } from "$lib/types";
  import { fly } from "svelte/transition";
  import WorkoutCard from "$lib/components/WorkoutCard.svelte";
  import { capitalizeFirstLetter } from "$lib/utils";
  import FavoriteFilled from "carbon-icons-svelte/lib/FavoriteFilled.svelte";
  import Checkmark from "carbon-icons-svelte/lib/Checkmark.svelte";
  import { onMount } from "svelte";

  import { invalidateAll } from "$app/navigation";

  let workoutModalLoading = false,
    activeWorkout: ExerciseDataType | null,
    windowWidth: number,
    noOfLikes = 0,
    userLikedWorkout = false,
    workoutLoading = true,
    updated = false;
  export let data: PageData;

  $: profilePictureURL =
    $currentUserStore.profilePicture || "./defaultPic.jpeg";

  onMount(() => {
    setTimeout(() => {
      workoutLoading = false;
    }, Math.floor(Math.random() * (2000 - 500 + 1)) + 500);
  });

  const workoutModalStyles = createStyles(() => ({
    ".svelteui-Modal-modal": {
      backgroundColor: "#1c1c1c !important",
    },
  }));
  $: ({ getStyles: getWorkoutModalStyles } = workoutModalStyles());

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

  function fileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      let result: string = reader.result as string;
      await fetch("/api/changeProfilePicture", {
        method: "POST",
        body: JSON.stringify({ pictureData: result }),
      });
      updated = true;
      setTimeout(() => (updated = false), 1500);
      profilePictureURL = result;
      invalidateAll();
    };
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
  <title>Profile | FITnFINE</title>
</svelte:head>

<div class="px-6 py-5">
  <div class="flex profileMobile:flex-col gap-8 w-full mb-4">
    <div
      class="flex flex-col gap-8 profileDesktop:mr-8 profileMobile:w-full profileMobile:items-center"
    >
      <div
        class="w-full flex rounded-full justify-center relative z-[1] imageWrapper profileMobile:max-w-[16rem] profileDesktop:max-w-[24rem] cursor-pointer"
      >
        <img src={profilePictureURL} alt="profile" class="rounded-full" />
        <div
          class={`absolute w-full h-full ${
            updated ? "block bg-black/70" : "hidden"
          } rounded-full transition-all`}
        >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="h-full rounded-full"
            on:click={() => document.getElementById("profilePic")?.click()}
          >
            <div class="flex justify-center items-center w-full h-full">
              <input
                type="file"
                hidden
                accept="image/*"
                id="profilePic"
                on:change={fileChange}
              />
              <h1 class="text-white flex gap-1 items-center text-xl">
                {#if updated}
                  <Checkmark fill="#52eb34" size={24} />Updated
                {:else}
                  <Edit size={24} />Change
                {/if}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Card override={{ backgroundColor: "#353536", width: "100%" }}>
        <h1 class="text-[1.3rem] text-white mb-1">
          Username: {$currentUserStore.username}
        </h1>
        <h1 class="text-[1.3rem] text-white mb-1">
          Height: {$currentUserStore.height}
        </h1>
        <h1 class="text-[1.3rem] text-white">
          Weight: {$currentUserStore.weight}
        </h1>
      </Card>
    </div>
    <div class="w-full">
      <h1 class="text-xl font-extrabold my-3 text-white">Liked workouts:</h1>
      <Divider />
      {#if workoutLoading}
        <Group position="center">
          <Loader variant="bars" class="fill-teal" />
        </Group>
      {:else if data.workouts.length > 0}
        <SimpleGrid
          cols={windowWidth > 940 ? 3 : windowWidth > 820 ? 2 : 1}
          class="transition-all w-full"
        >
          {#each data.workouts as userWorkout, i}
            {#if userWorkout.name}
              <button
                in:fly|global={{ x: 50, duration: 750, delay: i * 75 }}
                on:click={() => {
                  activeWorkout = userWorkout;
                  workoutModalLoading = true;
                  noOfLikes = userWorkout.likes;
                  userLikedWorkout = data.userData.likedWorkouts.includes(
                    userWorkout.id
                  );
                }}
                class="max-w-[24rem]"
              >
                <WorkoutCard {...userWorkout} />
              </button>
            {/if}
          {/each}
        </SimpleGrid>
      {:else}
        <h1 class="text-white">You haven't liked any workouts yet!</h1>
      {/if}
    </div>
  </div>
</div>

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
      <div class="h-full">
        <img
          src={activeWorkout.gifUrl}
          alt={activeWorkout.name}
          class="rounded-lg"
        />
      </div>
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

<style>
  .imageWrapper:hover > div {
    display: block;
    animation: fadeBGIn 0.2s forwards;
    border: 1px solid #029987;
  }

  @keyframes fadeBGIn {
    0% {
      background-color: rgb(0 0 0 / 0);
    }
    100% {
      background-color: rgb(0 0 0 / 0.7);
    }
  }
</style>
