import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import * as yup from "yup";
import Button from "../../components/button";
import Input from "../../components/input";
import getValidationErros from "../../helper/getValidationErros";
import { useAuth } from "../../hooks/auth";
import { Container, NavigatoToHome, SignInLink } from "./styles";

const SignUp = () => {
  const { signUp } = useAuth();
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
        name: yup.string().max(40).required("O nome é obrigatório"),
      });
      try {
        await schema.validate(data, { abortEarly: false });
        await signUp(data);
      } catch (error) {
        const erros = getValidationErros(error);
        formRef.current?.setErrors(erros);
      }
    },
    [signUp]
  );
  return (
    <Container>
      <h1>cadastre-se</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name={"name"}
          icon={FiUser}
          placeholder={"Como você prefere ser chamado?"}
        />
        <Input name={"email"} icon={FiMail} placeholder={"E-mail"} />
        <Input name={"password"} icon={FiLock} showEye placeholder={"Senha"} />
        <Button type="submit">Efetuar cadastro</Button>
      </Form>
      <SignInLink to="login">
        ja tem uma conta? <strong>entrar</strong>
      </SignInLink>
      <NavigatoToHome to="/"> Voltar para página inicial </NavigatoToHome>

    </Container>
  );
};

export default SignUp;
