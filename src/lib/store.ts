import { derived, writable, type Writable } from "svelte/store";

const lowerCaseRegex = new RegExp("(?=.*[a-z])");
const upperCaseRegex = new RegExp("(?=.*[A-Z])");
const numberRegex = new RegExp("(?=.*[0-9])");
const specialRegex = new RegExp("(?=.*[!@$%^&*])");
const lengthRegex = new RegExp("(?=.{8,})");

export const password = writable("");

type ValidationrError = {
  key: string;
  text: string;
  valid: boolean;
};

export const errors = derived<Writable<string>, ValidationrError[]>(
  password,
  ($password) => {
    return [
      {
        key: "lowercase",
        text: "At least one lowercase character",
        valid: lowerCaseRegex.test($password),
      },
      {
        key: "uppercase",
        text: "At least one uppercase character",
        valid: upperCaseRegex.test($password),
      },
      {
        key: "number",
        text: "At least one number",
        valid: numberRegex.test($password),
      },
      {
        key: "special",
        text: "At least one special character",
        valid: specialRegex.test($password),
      },
      {
        key: "length",
        text: "At least 8 characters",
        valid: lengthRegex.test($password),
      },
    ];
  }
);
