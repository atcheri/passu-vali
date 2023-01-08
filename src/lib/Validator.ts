import { password } from "./store";

export const handleInput = (e: Event & { currentTarget: HTMLInputElement }) => {
  password.set(e.currentTarget.value);
};

export const validate = () =>
  // event: Event & { currentTarget: EventTarget & HTMLFormElement }
  {
    console.log("submitting password", password);
  };
