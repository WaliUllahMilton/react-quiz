import { createContext, useContext } from "react";
import "../firebase";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
