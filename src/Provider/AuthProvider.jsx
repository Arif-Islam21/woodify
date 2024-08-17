import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const info = { createUser };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
