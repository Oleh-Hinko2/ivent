interface FormData {
  name?: string;
  description?: string;
  icon?: File;
}

export const prepareFormData = (data: FormData) => {
  let formData = new FormData();

  Object.entries(data).forEach((item) => {
    const [key, value] = item;
    formData.append(key, value);
  });

  return formData;
};
