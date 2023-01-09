<script lang="ts">
  import Validator from "./lib/Validator.svelte";
</script>

<main class="flex justify-center items-center container mx-auto md:h-screen">
  <div class="flex flex-col-reverse md:flex-row gap-6 items-center">
    <div
      class="flex flex-wrap content-center justify-center rounded-r-md"
      style="width: 24rem; height: 32rem;"
    >
      <img
        class="w-full h-full bg-center bg-no-repeat bg-cover"
        src="/password.svg"
        alt="is your password secure enough?"
      />
    </div>
    <div>
      <div class="my-6">
        <h1 class="text-center text-3xl text-indigo-600">
          Is your Passu-Vali?
        </h1>
        <h2 class="text-center text-xl text-indigo-400">Or not really</h2>
      </div>
      <Validator />
    </div>
  </div>
</main>

<style>
</style>
