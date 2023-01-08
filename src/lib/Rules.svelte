<script lang="ts">
  import IoMdCheckmarkCircleOutline from "svelte-icons/io/IoMdCheckmarkCircleOutline.svelte";
  import IoIosCloseCircleOutline from "svelte-icons/io/IoIosCloseCircleOutline.svelte";
  import { errors } from "./store";
</script>

<div>
  <ul>
    {#each $errors as error}
      <li class="flex gap-2">
        {#if error.valid}
          <span class="text-green-400 w-6 h-6">
            <IoMdCheckmarkCircleOutline />
          </span>
        {:else}
          <span class="text-slate-400 w-6 h-6">
            <IoIosCloseCircleOutline />
          </span>
        {/if}
        {error.text}
      </li>
    {/each}
  </ul>
</div>
