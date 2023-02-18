<script lang="ts">
  import "../app.css";
  import { SvelteUIProvider } from "@svelteuidev/core";
  import { navigating } from "$app/stores";
  import { goto } from "$app/navigation";

  const parseCookie = (str: any) =>
    str
      .split(";")
      .map((v: any) => v.split("="))
      .reduce((acc: any, v: any) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});

  $: if ($navigating) {
    if ($navigating.to?.route.id?.includes("dashboard")) {
      if (!document.cookie) {
        goto("/login");
      } else if (!parseCookie(document.cookie).session) {
        goto("/login");
      }
    }
  }
</script>

<SvelteUIProvider>
  <div class="content h-full">
    <slot />
  </div>
</SvelteUIProvider>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
</style>
