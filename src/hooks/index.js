import { AuthProvider } from "./auth";
import { DreamProvider } from "./dream";

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <DreamProvider>{children}</DreamProvider>
    </AuthProvider>
  );
};

export default RootProvider;
