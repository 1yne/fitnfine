<script lang="ts">
  import { currentUserStore } from "$lib/stores/currentUser";
  import { getGreeting } from "$lib/utils";
  import { page } from "$app/stores";
  import ArrowLeft from "carbon-icons-svelte/lib/ArrowLeft.svelte";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  import Logo from "$lib/icons/Logo.svelte";
  import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
  import OverflowMenuVertical from "carbon-icons-svelte/lib/OverflowMenuVertical.svelte";
  import {
    Dropdown,
    DropdownItem,
  } from "flowbite-svelte";
</script>

<div
  class="w-full flex items-center justify-between px-5 desktop:py-5 test h-16 mobile:bg-darkGreen desktop:bg-background text-white"
  id="wrapper"
>
  <div>
    {#if $page.url.pathname === "/dashboard"}
      <div class="greeting">
        <h1
          class="font-nunito text-3xl font-bold"
          in:fly|global={{ y: -50, duration: 500, delay: 700 }}
          out:fly|global={{ y: -50, duration: 500 }}
        >
          {getGreeting()}
          {$currentUserStore.username ? $currentUserStore.username : "user"}!
        </h1>
      </div>
      <div class="logo">
        <a
          href="/"
          class="flex"
          in:fly|global={{ y: -50, duration: 500, delay: 700 }}
          out:fly|global={{ y: -50, duration: 500 }}
        >
          <Logo size={45} />
        </a>
      </div>
    {:else}
      <button
        on:click={() => goto("/dashboard")}
        in:fly|global={{ y: 50, duration: 500, delay: 700 }}
        out:fly|global={{ y: 50, duration: 500 }}
        class="cursor-pointer"
      >
        <ArrowLeft size={30} />
      </button>
    {/if}
  </div>
  <div class="back-arrow">
    <OverflowMenuVertical size={24} class="dots-menu" />
    <Dropdown
      triggeredBy=".dots-menu"
      classContainer="font-nunito text-white !bg-background rounded-3xl z-[100] p-2 !left-[545px]"
    >
      <DropdownItem>
        <a href="/dashboard/profile" class="flex items-center gap-4">
          <UserAvatarFilledAlt size={24} />Profile
        </a>
      </DropdownItem>
      <DropdownItem class="flex items-center gap-4">
        <ArrowLeft size={24} />Logout
      </DropdownItem>
    </Dropdown>
  </div>
</div>
