<script lang="ts">
  import { errors } from "./store";
</script>

<div>
  <ul>
    {#each $errors as error}
      <li>{error.valid} {error.text}</li>
    {/each}
  </ul>
</div>
