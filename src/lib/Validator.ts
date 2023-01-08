import { get } from "svelte/store";
import { errors, password } from "./store";

// export let password = "";
export let type = "text";

export const handleInput = (e: Event & { currentTarget: HTMLInputElement }) => {
  password.set(e.currentTarget.value);
};

export const validate = () =>
  // event: Event & { currentTarget: EventTarget & HTMLFormElement }
  {
    console.log("submitting password", password);
  };
