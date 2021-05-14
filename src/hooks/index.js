import { AuthProvider } from "./auth";

const RootProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default RootProvider;
