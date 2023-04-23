<script lang="ts">
  import { currentUserStore } from "$lib/stores/currentUser";
  import { getGreeting } from "$lib/utils";
  import { page } from "$app/stores";
  import ArrowLeft from "carbon-icons-svelte/lib/ArrowLeft.svelte";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  import Logo from "$lib/icons/Logo.svelte";
  import { browser } from "$app/environment";
  import { Menu, createStyles } from "@svelteuidev/core";

  let windowWidth: any = browser && window.screen.width;

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

<svelte:window bind:innerWidth={windowWidth} />

<div
  class="w-full flex items-center justify-between px-5 desktop:py-5 test h-16 mobile:bg-darkGreen desktop:bg-background text-white"
  id="wrapper"
>
  <div>
    {#if $page.url.pathname === "/dashboard"}
      {#if windowWidth > 800}
        <h1
          class="font-nunito text-3xl font-extrabold"
          in:fly={{ y: -50, duration: 500, delay: 700 }}
          out:fly={{ y: -50, duration: 500 }}
        >
          {getGreeting()}
          {$currentUserStore.username ? $currentUserStore.username : "user"}!
        </h1>
      {:else}
        <a
          href="/"
          class="flex"
          in:fly={{ y: -50, duration: 500, delay: 700 }}
          out:fly={{ y: -50, duration: 500 }}
        >
          <Logo size={45} />
        </a>
      {/if}
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => goto("/dashboard")}
        in:fly={{ y: 50, duration: 500, delay: 700 }}
        out:fly={{ y: 50, duration: 500 }}
        class="cursor-pointer"
      >
        <ArrowLeft size={30} />
      </div>
    {/if}
  </div>
  {#if windowWidth <= 800}
    <div
      in:fly={{ x: 50, duration: 500, delay: 700 }}
      out:fly={{ x: 50, duration: 500 }}
    >
      <Menu
        class={`${getStyles()} font-nunito transition-all rounded-lg`}
      >
        <Menu.Item icon={ArrowLeft} color="red">Logout</Menu.Item>
      </Menu>
    </div>
  {/if}
</div>
