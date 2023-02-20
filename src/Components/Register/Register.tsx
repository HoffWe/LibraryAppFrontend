import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthApi } from "../../Api/AuthApi";
import { ACCESS_TOKEN } from "../../Constants/constants";
import '../Register/Register.css';
import LibraryPict from "../../assets/library.jpg";


export const Register =(props: any) =>{

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const[isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const[isPasswordValid, setIsPasswordValid] =useState <boolean>(true)
    const [password, setPassword] = useState<string>('');
       
        const navigate = useNavigate(); // przekierowanie na uzytkownika

        
        const handleSubmit = (e:any) =>{
            e.preventDefault();
            console.log(email);
    
      
            navigate('/')
    }

    return(

        <nav className="Container">
        < div className = "Picture-Library">
     <img src={LibraryPict} style ={{width: "100%", height: "100%"}} /> </div>  
        
        <div className="form-container-r">
             
        <form className ="register-form" onSubmit = {handleSubmit}>
        <form autoComplete="off">
            <label htmlFor="username">Podaj swoje imię</label>
           <input value={username} onChange={(e)=>setUsername(e.target.value)} name="name" id="name" placeholder="Podaj swoje imię"/>
           
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type ="email" placeholder ="Podaj swój adres email" id="email" name="email"/>
            
            <label htmlFor="password">Hasło</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type ="password" placeholder ="Podaj swoje hasło" id="password" name="password"/>
            <button className="submit" type="submit"  disabled={!isEmailValid || !isPasswordValid}
          onClick={Register}>Załóż konto</button>
           
        </form>
        </form>
        <a href="login" className="link" onClick={()=>props.onFormSwitch('Login')}>Jeśli posiadasz konto - Zaloguj się</a>

        </div>
        </nav>
    )
}

