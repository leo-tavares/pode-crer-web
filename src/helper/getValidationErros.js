import { ValidationError } from "yup";

export default function getValidationErros(err) {
  const validationErros = {};
  if (err instanceof ValidationError) {
    err.inner.forEach((error) => {
      validationErros[error.path] = error.message;
    });
  }
  return validationErros;
}
