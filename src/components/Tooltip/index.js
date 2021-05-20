import { Container } from "./styles";

const Tooltip = ({ title, children }) => {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
