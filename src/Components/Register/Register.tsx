import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthApi } from "../../Api/AuthApi";
import {
  InputContainer,
  RegisterButton,
  RegisterContainer,
  RegisterInput,
  StyledHeading,
  ValidationError,
  LoginLink,
} from "./RegisterStyle";
import { toast } from "react-toastify";
import { ACCESS_TOKEN } from "../../Constants/constants";
// tsconfig.json
import UserContext from "../../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { StyleDrawinglibrary } from "../Library/LibraryStyle";
import LibraryPic from "../../assets/library.jpg";

export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState <string>("");
    const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const { userModifier } = useContext(UserContext);

  const onRegisterClicked = useCallback(async () => {
    try {
      const result = await AuthApi.signup({
        username: username,
        password: password,
        email: email,
        
   
      });

      localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
      userModifier({ ...result.data });
      toast.success("Poprawna rejestracja", {
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
  }, [username, password, email, userModifier, navigate]);

  useEffect(() => {
    setIsUsernameValid(username.length > 0);
  }, [username]);

  useEffect(() => {
    setIsPasswordValid(password.length > 0);
  }, [password]);

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <RegisterContainer>
      <InputContainer>
        <StyleDrawinglibrary style={{ backgroundImage: `url(${LibraryPic})` }}>
          <div
            style={{
              width: "15vw",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledHeading>
              <span style={{ color: "black" }}> REJESTRACJA</span>
            </StyledHeading>
            <RegisterInput
              style={{ margin: "0 0 16px 0" }}
              placeholder="Nazwa użytkownika"
              type="username"
              onChange={(e) => onUsernameChange(e)}
            ></RegisterInput>
            {!isUsernameValid && (
              <ValidationError>Wpisz nazwę użytkownika</ValidationError>
            )}
            <RegisterInput
              style={{ margin: "16px 0 0 0" }}
              onChange={(e) => onPasswordChange(e)}
              placeholder="Hasło"
              type="password"
            ></RegisterInput>
            {!isPasswordValid && <ValidationError>Wpisz hasło</ValidationError>}
            <RegisterButton
              disabled={!isUsernameValid || !isPasswordValid}
              onClick={onRegisterClicked}
            >
              Zarejestruj się
            </RegisterButton>
            <LoginLink>
          <span>Posiadasz konto?</span>
          <Link to={"/Login"}>Zaloguj się</Link>
        </LoginLink>
          </div>
        </StyleDrawinglibrary>
      </InputContainer>
    </RegisterContainer>
  );
};
