import { useState } from "react";
import { AuthContext } from "./useAuth";

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [users, setUsers] = useState([
    {
      name: "Evandro",
      email: "evandro@teste.com",
      password: "123456",
    },
  ]);


  const login = ({ email, password }) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      return true;
    }

    return false;
  };

  const register = ({ name, email, password }) => {
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      return { success: false, message: "Usuário já existe" };
    }

    const newUser = { name, email, password };

    setUsers((prev) => [...prev, newUser]);
    setUser(newUser);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}