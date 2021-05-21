import { useCallback, useRef } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { FiMail } from "react-icons/fi";
import Input from "../../components/input";
import Button from "../../components/button";
import getValidationErros from "../../helper/getValidationErros";
import { useAuth } from "../../hooks/auth";
import { Container, Link, NavigatoToHome } from "./styles";

const ForgotPassoword = () => {
  const formRef = useRef(null);
  const { forgotPassword } = useAuth();
  const handleSubmit = useCallback(
    async (data) => {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("email inválido")
          .required("O campo de email é obrigatórios"),
      });
      try {
        await schema.validate(data, { abortEarly: false });
        const { email } = data;
        await forgotPassword(email);
      } catch (error) {
        const erros = getValidationErros(error);
        formRef.current?.setErrors(erros);
      }
    },
    [forgotPassword]
  );
  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Recuperação de senha</h1>
        <p>
          Já tem uma conta?
          <Link to="/login">ENTRAR</Link>
        </p>
        <Input name="email" icon={FiMail} />
        <Button type={"submit"}> Enviar link de recuparação </Button>
      </Form>
      <NavigatoToHome to="/"> Voltar para página inicial </NavigatoToHome>
    </Container>
  );
};

export default ForgotPassoword;
