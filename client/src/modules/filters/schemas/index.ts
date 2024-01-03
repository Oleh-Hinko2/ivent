import * as yup from "yup";

export const createFilterSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Імя є обовязковим")
    .min(2, "Імя має бути не менше ніж 2 символів")
    .max(30, "Імя має бути не більше ніж 30 символів"),
  description: yup
    .string()
    .trim()
    .required("Опис є обовязковим")
    .min(2, "Опис має бути не менше ніж 2 символів")
    .max(250, "Опис має бути не більше ніж 250 символів"),
});
