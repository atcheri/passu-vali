<script lang="ts">
  import Rules from "./Rules.svelte";
  import { password } from "./store";
  import { type, handleInput, validate } from "./Validator";
</script>

<form on:submit|preventDefault={validate}>
  <input
    {type}
    value={password}
    name="password"
    id="password"
    on:input={handleInput}
  />
  <button type="submit">Submit</button>
  <Rules />
</form>
