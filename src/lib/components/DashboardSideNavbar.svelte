<script>
  import Exit from "carbon-icons-svelte/lib/Exit.svelte";
  import { goto } from "$app/navigation";
  import Logo from "$lib/icons/Logo.svelte";
  import { fly } from "svelte/transition";

  async function logout() {
    goto("/");
    await fetch("/api/logout");
  }
</script>

<form
  class="bg-darkGreen h-[100vh] w-16 py-3 flex items-center justify-between gap-5 flex-col fixed"
  in:fly={{ x: -50, duration: 1050 }}
  out:fly={{ x: -50, duration: 300 }}
>
  <div>
    <div class="w-full py-2 cursor-pointer">
      <a href="/">
        <Logo size={45} />
      </a>
    </div>
  </div>
  <div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full flex justify-center py-2 cursor-pointer"
      on:click={logout}
    >
      <Exit
        size={35}
        class="text-yellow hover:text-yellowHover transition-all"
      />
    </div>
  </div>
</form>
