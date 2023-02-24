import "./LoginStyle.css";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnyARecord } from "dns";
import LibraryPict from "../../assets/library.jpg";
import { AuthApi } from "../../Api/AuthApi";
import { ACCESS_TOKEN } from "../../Constants/constants";
import { toast } from "react-toastify";
import { LoginContainer, StyledHeading, InputContainer, LoginInput, ValidationError, LoginButton } from "./Login.styles";

export const Login = (props: any) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true)
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);


  const navigate = useNavigate(); // przekierowanie na uzytkownika

  const onLoginClicked = useCallback(async () => {
    try {
      const result = await AuthApi.signIn({
        username: username,
        password: password,
      });

      localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
      userModifier({ ...result.data });
      toast.success("Poprawnie zalogowano", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } catch (error: any) {
      let errorMessage;

      if (error.response && error.response.status === 401) {
        errorMessage = "Podałeś błędne dane, spróbuj ponownie.";
      } else {
        errorMessage = "Wystąpił błąd podczas połączenia z serwerem.";
      }

      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [email, username, password, userModifier, navigate]);

  useEffect(() => {
    setIsUsernameValid(username.length > 0);
  }, [username]);

  useEffect(() => {
    setIsPasswordValid(password.length > 0);
  }, [password]);

  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(username);

    // TODO Odpytać API o status logowania - czy użytkownik zalogowany czy nie (pokazujemy błąd)
    // TODO Zapisać token, który został otrzymany od API (JWT) - zapis w localStorage

    // Redirect na stronę główną
    // navigate("/");
  };

  return (

    <nav className="Container">
      <div className="Picture-Library">
        <img src={LibraryPict} style={{ width: "100%", height: "100%" }} />{" "}
      </div>

      <div className="form-container-r">
        <form className="login-form" onSubmit={handleSubmit}>
          <form autoComplete="off">
            <label htmlFor="email">Email</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder="Podaj swój adres email"
              id="email"
              name="email"
            />

            <label htmlFor="password">Hasło</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Podaj swoje hasło"
              id="password"
              name="password"
            />
            <button
              className="submit"
              type="submit"
              disabled={!isUsernameValid || !isPasswordValid}
              onClick={onLoginClicked}
            >
              Zaloguj się
            </button>
          </form>
        </form>

        <a
          href="register"
          className="link"
          onClick={() => props.onFormSwitch("Register")}
        >
          Jeśli nie posiadasz konta - Zarejestruj się
        </a>
      </div>
    </nav>
  );
};



function userModifier(arg0: {
  username: string;
  email: string;
  roles: string[];
  accessToken: string;
}) {
  throw new Error("Function not implemented.");
}
