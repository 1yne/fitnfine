<script>
  import AccessibilityAlt from "carbon-icons-svelte/lib/AccessibilityAlt.svelte";
  import Restaurant from "carbon-icons-svelte/lib/Restaurant.svelte";
  import Logout from "carbon-icons-svelte/lib/Logout.svelte";
  import { goto } from "$app/navigation";

  async function logout() {
    goto("/");
    await fetch("/api/logout");
  }
</script>

<form
  class="bg-background h-[100vh] w-16 py-3 flex items-center justify-between gap-5 flex-col fixed"
>
  <div>
    <div class="w-full flex justify-center py-2 mb-2">
      <AccessibilityAlt
        size={35}
        class="text-logo hover:text-logoHover transition-all"
      />
    </div>
    <div class="w-full flex justify-center py-2">
      <Restaurant
        size={35}
        class="text-logo hover:text-logoHover transition-all"
      />
    </div>
  </div>
  <div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full flex justify-center py-2 cursor-pointer"
      on:click={logout}
    >
      <Logout size={35} class="text-logo hover:text-logoHover transition-all" />
    </div>
  </div>
</form>
