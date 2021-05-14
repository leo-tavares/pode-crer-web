import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import RootProvider from "./hooks";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RootProvider>
        <Routes />
      </RootProvider>
    </BrowserRouter>
  );
};

export default App;
