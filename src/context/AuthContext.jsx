import { useState } from "react";
import { AuthContext } from "./useAuth";

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);


  const login = ({ email, password }) => {
    if (email === "evandro@teste.com" && password === "123456") {
      setUser({ name: "Evandro", email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}