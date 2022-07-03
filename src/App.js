
import { useContext } from "react";
import { AuthContext } from "./Context/Auth-Context";
import { Pablic } from "./Pablic";
import { Private } from "./Private";
import './App.css'
function App() {
  const {token } = useContext(AuthContext)

  if(token){
    return <Private />
  
  }
  else{return <Pablic/>}

}

export default App;
