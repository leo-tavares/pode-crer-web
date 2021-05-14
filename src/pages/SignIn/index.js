import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import Button from "../../components/button";
import Input from "../../components/input";
import getValidationErros from "../../helper/getValidationErros";
import { Container } from "./styles";

const SignIn = () => {
  const formRef = useRef(null);
  const handleSubmit = useCallback(async (data, { reset }) => {
    const schema = yup.object().shape({
      email: yup.string().email().required("email é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve conter ao menos 6 digitos")
        .required("senha é obrigatório"),
    });
    try {
      const formValidation = await schema.validate(data, { abortEarly: false });
      console.log(formValidation);
    } catch (error) {
      const erros = getValidationErros(error);
      formRef.current?.setErrors(erros);
    }
  }, []);
  return (
    <Container>
      <h1>Faça seu login</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name={"email"} icon={FiMail} placeholder={"E-mail"} />
        <Input
          name={"password"}
          icon={FiLock}
          placeholder={"Senha"}
          type="password"
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
