<script lang="ts">
  import { currentUserStore } from "$lib/stores/currentUser";
  import { Card, Avatar, Spinner, Modal } from "flowbite-svelte";
  import Pen from "carbon-icons-svelte/lib/Pen.svelte";
  import { SvelteToast, toast } from "@zerodevx/svelte-toast";
  import type { PageData } from "./$types";
  import type { ExerciseDataType } from "$lib/types";
  import { fly } from "svelte/transition";
  import WorkoutCard from "$lib/components/WorkoutCard.svelte";
  import { capitalizeFirstLetter } from "$lib/utils";
  import FavoriteFilled from "carbon-icons-svelte/lib/FavoriteFilled.svelte";
  import { onMount } from "svelte";

  import { invalidateAll } from "$app/navigation";

  let workoutModalLoading = false,
    activeWorkout: ExerciseDataType | null,
    windowWidth: number,
    noOfLikes = 0,
    userLikedWorkout = false,
    workoutLoading = true, 
    imageError = false;

  export let data: PageData;

  $: profilePictureURL = $currentUserStore.profilePicture || "/defaultPic.jpeg";

  onMount(() => {
    setTimeout(
      () => {
        workoutLoading = false;
      },
      Math.floor(Math.random() * (2000 - 500 + 1)) + 500
    );
  });

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
      toast.push(`<h1>Avatar changed</h1>`, {
        theme: {
          "--toastColor": "mintcream",
          "--toastBackground": "#029987",
          "--toastBarBackground": "#218074",
          "--toastBorderRadius": "6px",
          "--toastPadding": "0.5rem",
        },
      });
      profilePictureURL = result;
      invalidateAll();
    };
  }

  const options = {
    duration: 3000,
    initial: 1,
    next: 0,
    intro: { x: 256 },
  };
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
  <title>Profile | FITnFINE</title>
</svelte:head>

<SvelteToast {options} />

<div class="px-6 py-5">
  <div class="flex profileMobile:flex-col gap-8 w-full mb-4">
    <div
      class="flex flex-col gap-8 profileDesktop:mr-8 profileMobile:w-full profileMobile:items-center profileDesktop:max-w-[20rem]"
    >
      <div class="avatarWrap relative">
        <Avatar
          src={profilePictureURL}
          class="rounded-[5rem] z-[10000000] w-72"
          size="none"
        />
        <div
          class="editBtn bg-teal transition-all absolute rounded-full right-0 -top-0 text-white cursor-pointer"
        >
          <button
            class="p-2"
            on:click={() => document.getElementById("profilePic")?.click()}
          >
            <Pen size={24} />
          </button>
          <input
            type="file"
            hidden
            accept="image/*"
            id="profilePic"
            on:change={fileChange}
          />
        </div>
      </div>
      <Card class="bg-cardBG border-none min-w-[15rem] max-w-5xl">
        <h1 class="text-[1.3rem] text-white mb-1">
          Username: {data.userData.username}
        </h1>
        <h1 class="text-[1.3rem] text-white mb-1">
          Height: {data.userData.height}
        </h1>
        <h1 class="text-[1.3rem] text-white">
          Weight: {data.userData.weight}
        </h1>
      </Card>
    </div>
    <div class="w-full">
      <h1 class="text-xl my-3 text-white">Liked workouts:</h1>
      <hr class="mb-4" />
      {#if workoutLoading}
        <div class="flex justify-center w-full">
          <Spinner color="green" />
        </div>
      {:else if data.workouts.length > 0}
        <div class="transition-all w-full grid gap-4 cardGridProfile">
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
        </div>
      {:else}
        <h1 class="text-white">You haven't liked any workouts yet!</h1>
      {/if}
    </div>
  </div>
</div>

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
            on:error={() => imageError = true}
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

<style>
  .editBtn:hover {
    background-color: #218074;
  }
  @media (min-width: 940px) {
    .cardGridProfile {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (820px <= width <= 939px) {
    .cardGridProfile {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 819px) {
    .cardGridProfile {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  :global(.header > button:hover) {
    background-color: #494a4a;
  }
</style>
