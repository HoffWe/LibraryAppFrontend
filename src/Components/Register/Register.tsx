import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import '../Register/Register.css';
import LibraryPict from "../../assets/library.jpg";
import {UserApi} from "../../Api/UserApi";
import {Input} from "@chakra-ui/react";


export const Register =() =>{

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const[isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const[isPasswordValid, setIsPasswordValid] =useState <boolean>(true)

       
        const navigate = useNavigate(); // przekierowanie na uzytkownika


        const handleSubmit = async () =>{
            const result = await UserApi.addUser({username: username, password: password})
        }
    
      
            navigate('/')




    return(

       <div>
        < div className = "Picture-Library">
     <img src={LibraryPict} style ={{width: "100%", height: "100%"}} /> </div>  
        
        <div className="form-container-r">

        <form autoComplete="off">
            <label htmlFor="username">Podaj swoje imię</label>
            <Input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Podaj swoje imię" ></Input>
           
            <label htmlFor="email">Email</label>
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Podaj e-mail" ></Input>
            
            <label htmlFor="password">Hasło</label>
            <Input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Podaj swoje imię" ></Input>
            <button className="submit" type="submit"  disabled={!isEmailValid || !isPasswordValid}
          onClick={handleSubmit}>Załóż konto</button>
           
        </form>

        </div>
       </div>
    )
}

