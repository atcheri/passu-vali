import { errors, password } from "./store";

export let type = "text";

export const handleInput = (e: Event & { currentTarget: HTMLInputElement }) => {
  password.set(e.currentTarget.value);
};

export const validate = () =>
  // event: Event & { currentTarget: EventTarget & HTMLFormElement }
  {
    console.log("submitting password", password);
    errors.update((prevErrors) => {
      return prevErrors.map((err) => {
        if (err.key === "lowercase") {
          err.valid = !err.valid;
        }
        return err;
      });
    });
  };
