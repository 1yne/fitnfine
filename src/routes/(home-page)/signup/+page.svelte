<script lang="ts">
  import { TextInput, Notification } from "@svelteuidev/core";
  import type { ActionData } from "./$types";
  export let form: ActionData;
  import { browser } from "$app/environment";
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
    <img
      src="/SignUpImage.jpeg"
      alt="A fruit bowl"
      class="image"
    />
  </div>
  <div class="w-[33rem]">
    <div class="h-full w-full">
      {#if currentSlide === "signup"}
        <div
          class="signup w-full h-full flex flex-col justify-start items-center p-14 gap-10"
          in:fly={{ x: -50, duration: 500, delay: 700 }}
          out:fly={{ x: -50, duration: 500 }}
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
              <Notification color="red" withCloseButton={false} class="w-full">
                {form.error}
              </Notification>
            {/if}
            <TextInput
              placeholder="Username"
              name="username"
              required={true}
              class="!font-nunito w-full"
              override={{
                input: {
                  py: "1rem",
                  px: "1rem",
                  backgroundColor: "#1c1c1c !important",
                  borderColor: "#1c1c1c !important",
                  borderBottomColor: "#029987 !important",
                  color: "white !important",
                },
              }}
              error={form?.invalid}
              on:input={onChange}
            />
            <TextInput
              placeholder="Email"
              class="!font-nunito w-full"
              name="email"
              type="email"
              required={true}
              override={{
                input: {
                  py: "1rem",
                  px: "1rem",
                  backgroundColor: "#1c1c1c !important",
                  borderColor: "#1c1c1c !important",
                  borderBottomColor: "#029987 !important",
                  color: "white !important",
                },
              }}
              error={form?.invalid}
              on:input={onChange}
            />
            <TextInput
              placeholder="Password"
              class="!font-nunito w-full"
              name="password"
              required={true}
              type="password"
              override={{
                input: {
                  py: "1rem",
                  px: "1rem",
                  backgroundColor: "#1c1c1c !important",
                  borderColor: "#1c1c1c !important",
                  borderBottomColor: "#029987 !important",
                  color: "white !important",
                },
              }}
              error={form?.invalid}
              on:input={onChange}
            />
            <div class="flex">
              <TextInput
                placeholder="Weight (kg)"
                class="!font-nunito mr-4"
                name="weight"
                required={true}
                override={{
                  input: {
                    py: "1rem",
                    px: "1rem",
                    backgroundColor: "#1c1c1c !important",
                    borderColor: "#1c1c1c !important",
                    borderBottomColor: "#029987 !important",
                    color: "white !important",
                  },
                }}
                error={form?.invalid}
                on:input={onChange}
              />
              <TextInput
                placeholder="Height (cm)"
                class="!font-nunito"
                name="height"
                required={true}
                override={{
                  input: {
                    py: "1rem",
                    px: "1rem",
                    backgroundColor: "#1c1c1c !important",
                    borderColor: "#1c1c1c !important",
                    borderBottomColor: "#029987 !important",
                    color: "white !important",
                  },
                }}
                error={form?.invalid}
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
          in:fly={{ x: 50, duration: 500, delay: 700 }}
          out:fly={{ x: 50, duration: 500 }}
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
              <Notification
                color="red"
                withCloseButton={false}
                class="w-full mb-7"
              >
                {form.error}
              </Notification>
            {/if}
            <TextInput
              placeholder="Email"
              class="!font-nunito w-full"
              name="email"
              type="email"
              required={true}
              override={{
                input: {
                  py: "1rem",
                  px: "1rem",
                  backgroundColor: "#1c1c1c !important",
                  borderColor: "#1c1c1c !important",
                  borderBottomColor: "#029987 !important",
                  color: "white !important",
                  marginBottom: "1.75rem !important",
                },
              }}
              error={form?.invalid}
              on:input={onChange}
            />
            <TextInput
              placeholder="Password"
              class="!font-nunito w-full"
              name="password"
              required={true}
              type="password"
              override={{
                input: {
                  py: "1rem",
                  px: "1rem",
                  backgroundColor: "#1c1c1c !important",
                  borderColor: "#1c1c1c !important",
                  borderBottomColor: "#029987 !important",
                  color: "white !important",
                  marginBottom: "1.75rem !important",
                },
              }}
              error={form?.invalid}
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
