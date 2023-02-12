<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="navbar">
  <Navbar />
</div>
<slot />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  .navbar {
    font-family: Righteous;
  }
</style>
