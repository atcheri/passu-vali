<script lang="ts">
  import { get } from "svelte/store";
  import Rules from "./Rules.svelte";
  import { password } from "./store";
  import { type, handleInput, validate } from "./Validator";
</script>

<form on:submit|preventDefault={validate}>
  <div class="mb-3">
    <label for="password" class="mb-2 block text-xs font-semibold"
      >Enter your <b>Strong</b> Password</label
    >
    <input
      {type}
      value={get(password)}
      name="password"
      id="password"
      on:input={handleInput}
      placeholder="*****"
      class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
    />
  </div>
  <button
    type="submit"
    class="block w-full text-center text-white duration-200 bg-indigo-700 hover:bg-indigo-900 px-2 py-1.5 rounded-md"
    >Validate</button
  >
  <div class="mt-4">
    <Rules />
  </div>
</form>
