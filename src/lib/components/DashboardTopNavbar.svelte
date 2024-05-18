<script lang="ts">
  import { currentUserStore } from "$lib/stores/currentUser";
  import { getGreeting } from "$lib/utils";
  import { page } from "$app/stores";
  import ArrowLeft from "carbon-icons-svelte/lib/ArrowLeft.svelte";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  import Logo from "$lib/icons/Logo.svelte";
  import { Menu, createStyles } from "@svelteuidev/core";
  import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";

  const useStyles = createStyles(() => ({
    " > button": {
      backgroundColor: "#264653",
    },
    " > button:hover": {
      backgroundColor: "#1b323b",
    },
    " > button > svg": {
      color: "#029987",
      size: "1.25rem",
    },
    " > div > .svelteui-Menu-svelteui-Menu-body": {
      backgroundColor: "#353536",
      border: "1px solid #353536",
    },
    " > div > .svelteui-Menu-svelteui-Menu-body:hover": {
      backgroundColor: "#494a4a",
      border: "1px solid #494a4a",
    },
    " > div > .svelteui-Menu-svelteui-Menu-body > .svelteui-MenuItem-root:hover":
      {
        backgroundColor: "#494a4a",
      },
  }));
  $: ({ getStyles } = useStyles());
</script>

<div
  class="w-full flex items-center justify-between px-5 desktop:py-5 test h-16 mobile:bg-darkGreen desktop:bg-background text-white"
  id="wrapper"
>
  <div>
    {#if $page.url.pathname === "/dashboard"}
      <div class="greeting">
        <h1
          class="font-nunito text-3xl font-extrabold"
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
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => goto("/dashboard")}
        in:fly|global={{ y: 50, duration: 500, delay: 700 }}
        out:fly|global={{ y: 50, duration: 500 }}
        class="cursor-pointer"
      >
        <ArrowLeft size={30} />
      </div>
    {/if}
  </div>
  <div class="back-arrow">
    <Menu class={`${getStyles()} font-nunito transition-all rounded-lg`}>
      <a href="/dashboard/profile"
        ><Menu.Item icon={UserAvatarFilledAlt}>Profile</Menu.Item></a
      >
      <Menu.Item icon={ArrowLeft} color="red">Logout</Menu.Item>
    </Menu>
  </div>
</div>
