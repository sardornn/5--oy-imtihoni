import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth-Context";
import  './Sign-in.css';

export const SignIn = ()=> {
    const navigate = useNavigate()
    const emailRef = useRef();
    const passwordRef = useRef();
    const {setToken} = useContext(AuthContext)
    const [error, setError] = useState(false);

    const handleForm = async (evt)=>  {
        evt.preventDefault();

        const data = {
            email : emailRef.current.value,
            password: passwordRef.current.value,
        }
        const res = await fetch('https://reqres.in/api/login',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    

        if(res.ok){
            setToken(data)
            navigate('/');
        }
        else {
            setError(true);
          }
    }

    return(
    <>

        <div className="containe">
            <h2 className="header_login text-center ">Login</h2>


            <form onSubmit={handleForm} className="form">
            <div className="login_info">
          Login: eve.holt@reqres.in
        </div>
                <input ref={emailRef} className={`input_login  ${ error? 'is-invalid' : '' }`}  type="text" placeholder="Login" />
                <input ref={passwordRef} className={`input_login  ${ error? 'is-invalid' : '' }`}  placeholder="Password"/>
                <button type="submit" className="login_button  d-block " >Sabmit</button>
            </form>
        </div>
    </>
    )
}