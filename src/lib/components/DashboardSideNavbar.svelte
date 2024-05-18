<script>
  import Exit from "carbon-icons-svelte/lib/Exit.svelte";
  import { goto } from "$app/navigation";
  import Logo from "$lib/icons/Logo.svelte";
  import { fly } from "svelte/transition";
  import { currentUserStore } from "$lib/stores/currentUser";
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";

  async function logout() {
    goto("/");
    await fetch("/api/logout");
  }
</script>

<form
  class="bg-darkGreen h-[100vh] w-16 py-3 flex items-center justify-between gap-5 flex-col fixed"
  in:fly|global={{ x: -50, duration: 1050 }}
  out:fly|global={{ x: -50, duration: 300 }}
>
  <div>
    <div class="w-full py-2 cursor-pointer">
      <a href="/">
        <Logo size={45} />
      </a>
    </div>
  </div>
  <div>
    <div
      class="w-full flex items-center py-2 px-2 cursor-pointer gap-6 flex-col"
    >
      <div class="px-1">
        <a href="/dashboard/profile"
          ><img
            src={$currentUserStore.profilePicture || "/defaultPic.jpeg"}
            alt="profile"
            class="rounded-full flex w-16 h-10"
          /></a
        >
      </div>
      <div>
        <a
          href="https://github.com/Caladan08/fitnfine"
          target="_blank"
          rel="noreferrer"
        >
          <LogoGithub
            size={40}
            class="fill-white hover:fill-gray-300 transition-all"
          />
        </a>
      </div>
      <button on:click={logout}>
        <Exit
          size={35}
          class="text-yellow hover:text-yellowHover transition-all"
        />
      </button>
    </div>
  </div>
</form>
