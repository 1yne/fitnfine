<script lang="ts">
  import { TextInput, Notification } from "@svelteuidev/core";
  import type { ActionData } from "./$types";
  export let form: ActionData;

  const onChange = () => {
    if (form?.invalid) {
      form.invalid = false;
    }
  };
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="h-[100vh] flex w-full">
  <div class="w-8/12 overflow-hidden">
    <img src="/LoginImage.jpeg" alt="A fruit bowl" />
  </div>
  <div class="w-4/12">
    <div class="h-full w-full flex flex-col justify-start p-14 gap-10">
      <div class="font-nunito text-white">
        <h1 class="text-4xl font-black mb-3">Login</h1>
        <p>Welcome back to your transformation!</p>
      </div>
      <form method="POST" class="flex items-start flex-col w-full">
        {#if form?.invalid}
          <Notification color="red" withCloseButton={false} class="w-full mb-7">
            {form.error}
          </Notification>
        {/if}
        <TextInput
          placeholder="Email"
          class="!font-nunito"
          name="email"
          type="email"
          required={true}
          override={{
            input: {
              py: "1rem",
              px: "1rem",
              width: "100%",
              backgroundColor: "#1c1c1c !important",
              borderColor: "#1c1c1c !important",
              borderBottomColor: "#029987 !important",
              color: "white !important",
              marginBottom: "1.75rem !important"
            },
          }}
          error={form?.invalid}
          on:input={onChange}
        />
        <TextInput
          placeholder="Password"
          class="!font-nunito"
          name="password"
          required={true}
          type="password"
          override={{
            input: {
              py: "1rem",
              px: "1rem",
              width: "100%",
              backgroundColor: "#1c1c1c !important",
              borderColor: "#1c1c1c !important",
              borderBottomColor: "#029987 !important",
              color: "white !important",
              marginBottom: "1.75rem !important"
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
      <div class="h-full flex items-end justify-end">
        <p class="text-white">
          Haven't yet created an account? <a href="/signup" class="text-yellow"
            >Sign up</a
          >
        </p>
      </div>
    </div>
  </div>
</div>
