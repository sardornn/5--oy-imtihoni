import { createContext, useState , useEffect} from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children})=>{
const localData = localStorage.getItem('token');
 const [token, setToken] = useState(JSON.parse(localData))
 useEffect(() => {
    if (token) {
      return localStorage.setItem('token', JSON.stringify(token));
    }

    localStorage.removeItem('token');
  }, [token]);
   return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}