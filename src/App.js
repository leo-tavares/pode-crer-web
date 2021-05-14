import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
