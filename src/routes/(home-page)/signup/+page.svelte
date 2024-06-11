<script lang="ts">
  import { Input, Alert } from "flowbite-svelte";
  import type { ActionData } from "./$types";
  export let form: ActionData;
  import { fly } from "svelte/transition";

  const onChange = () => {
    if (form?.invalid) {
      form.invalid = false;
    }
  };

  let currentSlide = "signup";
  $: if (form) {
    if (form.signup === false) {
      currentSlide = "login";
    }
  }
</script>

<svelte:head>
  <title>{currentSlide === "signup" ? "Signup" : "Login"} | FITnFINE</title>
</svelte:head>

<div class="h-[100vh] flex w-full overflow-hidden wrapper">
  <div class="w-8/12 overflow-hidden imageWrapper">
    <img src="/SignUpImage.jpeg" alt="A fruit bowl" class="image" />
  </div>
  <div class="w-[33rem]">
    <div class="h-full w-full">
      {#if currentSlide === "signup"}
        <div
          class="signup w-full h-full flex flex-col justify-start items-center p-14 gap-10"
          in:fly|global={{ x: -50, duration: 500, delay: 700 }}
          out:fly|global={{ x: -50, duration: 500 }}
        >
          <div class="font-nunito text-white">
            <h1 class="text-4xl font-black mb-3">Create an account</h1>
            <p>Let's get started on your transformation into your best self!</p>
          </div>
          <form
            method="POST"
            class="flex items-start flex-col gap-7 w-full"
            action="?/signup"
          >
            {#if form?.invalid}
              <Alert color="red" class="w-full" border>
                {form.error}
              </Alert>
            {/if}
            <Input
              placeholder="Username"
              required
              class={`
                bg-background font-nunito text-white transition-all border-b
                border-background border-b-teal border-solid focus:border-teal 
                focus:ring-teal textInput
              `}
              name="username"
              on:input={onChange}
            />
            <Input
              placeholder="Email"
              required
              class={`
                bg-background font-nunito text-white transition-all border-b
                border-background border-b-teal border-solid focus:border-teal 
                focus:ring-teal textInput
              `}
              name="email"
              type="email"
              on:input={onChange}
            />
            <Input
              placeholder="Password"
              required
              class={`
                bg-background font-nunito text-white transition-all border-b
                border-background border-b-teal border-solid focus:border-teal 
                focus:ring-teal textInput
              `}
              name="password"
              type="password"
              on:input={onChange}
            />
            <div class="flex w-full gap-4">
              <Input
                placeholder="Weight"
                required
                class={`
                bg-background font-nunito text-white transition-all border-b
                border-background border-b-teal border-solid focus:border-teal 
                focus:ring-teal textInput w-1/2
              `}
                name="weight"
                on:input={onChange}
              />
              <Input
                placeholder="Height"
                required
                class={`
                bg-background font-nunito text-white transition-all border-b
                border-background border-b-teal border-solid focus:border-teal 
                focus:ring-teal textInput w-1/2
              `}
                name="height"
                on:input={onChange}
              />
            </div>
            <button
              class="w-full bg-orange hover:bg-orangeHover transition-all rounded-lg py-3 text-white mt-3"
              >Create account</button
            >
          </form>
          <div class="h-full flex items-end justify-end">
            <p class="text-white">
              Already created an account? <button
                on:click={() => (currentSlide = "login")}
                class="text-yellow transition-all hover:text-yellowHover"
                >Login</button
              >
            </p>
          </div>
        </div>
      {:else}
        <div
          in:fly|global={{ x: 50, duration: 500, delay: 700 }}
          out:fly|global={{ x: 50, duration: 500 }}
          class="login h-full w-full flex flex-col justify-start items-start p-14 gap-10"
        >
          <div class="font-nunito text-white">
            <h1 class="text-4xl font-black mb-3">Login</h1>
            <p>Welcome back to your transformation!</p>
          </div>
          <form
            method="POST"
            class="flex items-start flex-col w-full"
            action="?/login"
          >
            {#if form?.invalid}
              <Alert color="red" class="w-full" border>
                {form.error}
              </Alert>
            {/if}
            <Input
              placeholder="Email"
              required
              class={`
                bg-background font-nunito text-white transition-all border-b
                border-background border-b-teal border-solid focus:border-teal 
                focus:ring-teal textInput mb-7
              `}
              name="email"
              on:input={onChange}
            />
            <Input
              placeholder="Password"
              required
              class={`
                bg-background font-nunito text-white transition-all border-b
                border-background border-b-teal border-solid focus:border-teal 
                focus:ring-teal textInput mb-7
              `}
              name="password"
              type="password"
              on:input={onChange}
            />
            <button
              class="w-full bg-orange hover:bg-orangeHover transition-all rounded-lg py-3 text-white mt-3"
              >Login</button
            >
          </form>
          <div class="h-full w-full flex justify-center items-end">
            <p class="text-white">
              Haven't yet created an account? <button
                on:click={() => (currentSlide = "signup")}
                class="text-yellow transition-all hover:text-yellowHover"
                >Sign up</button
              >
            </p>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  :global(.textInput::placeholder) {
    font-size: 1rem;
  }
</style>
