import { useCallback, useRef } from "react";
import Input from "../../components/input";
import { Container } from "./styles";
import { FiMail } from "react-icons/fi";
import { Form } from "@unform/web";
import Button from "../../components/button";
import * as Yup from "yup";
import getValidationErros from "../../helper/getValidationErros";
import { useAuth } from "../../hooks/auth";

const ForgotPassoword = () => {
  const formRef = useRef(null);
  const { forgotPassword } = useAuth();
  const handleSubmit = useCallback(async (data) => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email("email inválido")
        .required("O campo de email é obrigatórios"),
    });
    try {
      await schema.validate(data, { abortEarly: false });
      const { email } = data;
      await forgotPassword(email)
    } catch (error) {
      const erros = getValidationErros(error);
      formRef.current?.setErrors(erros);
    }
  }, [forgotPassword]);
  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" icon={FiMail} />
        <Button type={"submit"}> Enviar link de recuparação </Button>
      </Form>
    </Container>
  );
};

export default ForgotPassoword;
