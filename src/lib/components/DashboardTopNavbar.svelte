<script>
  import { currentUserStore } from "$lib/stores/currentUser";
  import { getGreeting } from "$lib/utils";
  import { page } from "$app/stores";
  import ArrowLeft from "carbon-icons-svelte/lib/ArrowLeft.svelte";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";

</script>

<div class="w-full items-center px-5 py-5">
  {#if $page.url.pathname === "/dashboard"}
    <h1 class="font-nunito text-3xl font-extrabold" in:fly="{{ y: -50, duration: 500, delay: 700  }}" out:fly="{{ y: -50, duration: 500}}">{getGreeting()} {$currentUserStore.username ? $currentUserStore.username : "user"}!</h1>
  {:else}
    <div on:click={() => goto("/dashboard")} in:fly="{{ y: 50, duration: 500, delay: 700 }}" out:fly="{{ y: 50, duration: 500 }}">
      <ArrowLeft size={30} />
    </div>
  {/if}
</div>