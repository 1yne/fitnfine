<script>
  import "../app.css";
  import { SvelteUIProvider } from "@svelteuidev/core"
</script>

<SvelteUIProvider>
  <div class="content">
    <slot />
  </div>
</SvelteUIProvider>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
</style>
