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
  <title>Sign Up</title>
</svelte:head>

<div class="bg-secondBackground h-[100vh] flex w-full">
  <div class="w-8/12 overflow-hidden">
    <img src="/SignUpImage.jpeg" alt="A fruit bowl" />
  </div>
  <div class="w-4/12">
    <div class="h-full w-full flex flex-col justify-start p-14 gap-10">
      <div class="font-nunito text-white">
        <h1 class="text-4xl font-black mb-3">Create an account</h1>
        <p>Let's get started on your transformation into your best self!</p>
      </div>
      <form method="POST" class="flex items-start flex-col gap-7 w-full">
        {#if form?.invalid}
          <Notification color="red" withCloseButton={false} class="w-full">
            {form.error}
          </Notification>
        {/if}
        <TextInput
          placeholder="Username"
          name="username"
          required={true}
          class="w-full !font-nunito"
          override={{
            input: {
              py: "1rem",
              px: "1rem",
              width: "100%",
              backgroundColor: "#2A9D8F !important",
              borderColor: "#2A9D8F !important",
              borderBottomColor: "black !important",
              color: "white !important",
            },
          }}
          error={form?.invalid}
          on:input={onChange}
        />
        <TextInput
          placeholder="Email"
          class="w-full !font-nunito"
          name="email"
          type="email"
          required={true}
          override={{
            input: {
              py: "1rem",
              px: "1rem",
              width: "100%",
              backgroundColor: "#2A9D8F !important",
              borderColor: "#2A9D8F !important",
              borderBottomColor: "black !important",
              color: "white !important",
            },
          }}
          error={form?.invalid}
          on:input={onChange}
        />
        <TextInput
          placeholder="Password"
          class="w-full !font-nunito"
          name="password"
          required={true}
          override={{
            input: {
              py: "1rem",
              px: "1rem",
              width: "100%",
              backgroundColor: "#2A9D8F !important",
              borderColor: "#2A9D8F !important",
              borderBottomColor: "black !important",
              color: "white !important",
            },
          }}
          error={form?.invalid}
          on:input={onChange}
        />
        <button
          class="w-full bg-[#E76F51] hover:bg-[#cf6348] transition-smooth rounded-lg py-3 text-white"
          >Create account</button
        >
      </form>
      <div class="h-full flex items-end justify-end">
        <p class="text-white">
          Already created an account? <a href="/login" class="text-[#E9C46A]"
            >Login in</a
          >
        </p>
      </div>
    </div>
  </div>
</div>
