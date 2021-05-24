import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Preencha com seu nome completo"),
  email: yup
    .string()
    .email("Preencha com um e-mail válido")
    .required("Preencha com um e-mail válido"),
});
