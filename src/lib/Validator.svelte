<script lang="ts">
  import { get } from "svelte/store";
  import Rules from "./Rules.svelte";
  import { password } from "./store";
  import { type, handleInput, validate } from "./Validator";
</script>

<form on:submit|preventDefault={validate}>
  <input
    {type}
    value={get(password)}
    name="password"
    id="password"
    on:input={handleInput}
  />
  <button type="submit">Submit</button>
  <Rules />
</form>
