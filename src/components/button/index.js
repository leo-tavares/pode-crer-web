import { Container } from "./styles";

const Button = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default Button;
