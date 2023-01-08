import { writable } from "svelte/store";

type ValidationrError = {
  key: string;
  text: string;
  valid: boolean;
};

export const errors = writable<ValidationrError[]>([
  {
    key: "lowercase",
    text: "At least one lowercase character",
    valid: false,
  },
  {
    key: "uppercase",
    text: "At least one uppercase character",
    valid: false,
  },
  {
    key: "number",
    text: "At least one number",
    valid: false,
  },
  {
    key: "special",
    text: "At least one special character",
    valid: false,
  },
  {
    key: "length",
    text: "At least 8 characters",
    valid: false,
  },
]);

export const password = writable("");
