import { createContext } from "react";
import {AuthUser} from "./hooks/auth";

const ContextAuth = createContext();

function AuthProvider({ children }) {
  const { name, setName, password, setPassword, singIn } = AuthUser();
  return (
    <ContextAuth.Provider value={{ name, setName, password, setPassword, singIn }}>
        {children}
    </ContextAuth.Provider>
  );
}
export { ContextAuth, AuthProvider };
