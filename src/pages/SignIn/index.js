import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import Button from "../../components/button";
import Input from "../../components/input";
import getValidationErros from "../../helper/getValidationErros";
import { useAuth } from "../../hooks/auth";
import { Container, SignUpLink, ForgotPasswordLink } from "./styles";

const SignIn = () => {
  const { signIn } = useAuth();
  const formRef = useRef(null);
  const handleSubmit = useCallback(
    async (data) => {
      const schema = yup.object().shape({
        email: yup
          .string()
          .email("email inválido")
          .required("email é obrigatório"),
        password: yup
          .string()
          .min(6, "A senha deve conter ao menos 6 digitos")
          .required("senha é obrigatório"),
      });
      try {
        await schema.validate(data, { abortEarly: false });
        const { email, password } = data;
        await signIn({ email, password });
      } catch (error) {
        console.log(error)
        const erros = getValidationErros(error);
        formRef.current?.setErrors(erros);
      }
    },
    [signIn]
  );
  return (
    <Container>
      <h1>Faça seu login</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name={"email"} icon={FiMail} placeholder={"E-mail"} />
        <ForgotPasswordLink to="recuperarAcesso"> recuperar acesso </ForgotPasswordLink>
        <Input
          name={"password"}
          icon={FiLock}
          showEye
          placeholder={"Senha"}
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <SignUpLink to="signUp">Quero me cadastrar </SignUpLink>
    </Container>
  );
};

export default SignIn;
