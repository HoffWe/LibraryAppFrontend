import React, { useCallback, useContext } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../../Constants/constants";
import AccountIcon from "../../icons/AccountIcon";
import { Email, ProfileDrawerContainer, UserName } from "./ProfileDrawerStyle";
import { PrimaryButton, SecondaryButton } from "../GlobalStyle";
import UserContext from "../../Context/UserContext";

interface ProfileDrawerProps {
    isProfileDrawerOpen: boolean;
    toggleProfileDrawer: () => void;
  }
  export const ProfileDrawer = (props: ProfileDrawerProps) => {
    
    const {currentUser, userModifier } = useContext(UserContext);
    const navigate = useNavigate();
  
    const onLogout = useCallback(() => {
      userModifier(null);
      localStorage.removeItem(ACCESS_TOKEN);
      navigate("/Login");
      props.toggleProfileDrawer();
    }, [navigate, props, userModifier]);
  
    const onRegisterClicked = useCallback(() => {
      // TODO Add registration
      userModifier(null);
      localStorage.removeItem(ACCESS_TOKEN);
      navigate("/Register")
      props.toggleProfileDrawer();
    }, [navigate, props, userModifier]);
        return (
            <Drawer
              open={props.isProfileDrawerOpen}
              onClose={props.toggleProfileDrawer}
              direction="right"
            >
              <ProfileDrawerContainer>
                {currentUser ? (
                  <>
                    <AccountIcon />
                    <UserName>{currentUser.username}</UserName>
                    <Email>{currentUser.email}</Email>
                    <PrimaryButton
                      onClick={() => {
                        navigate("/profile");
                        props.toggleProfileDrawer();
                      }}
                    >
                      Twoje konto
                    </PrimaryButton>
                    <SecondaryButton onClick={onLogout}>Wyloguj się</SecondaryButton>
                  </>
                ) : (
                  <>
                    <h2>Nie jesteś zalogowany</h2>
                    <p>
                     Aby wypożyczyć książkę 
                    </p>
                    <PrimaryButton
                      onClick={() => {
                        navigate("/login");
                        props.toggleProfileDrawer();
                      }}
                    >
                      Zaloguj się
                    </PrimaryButton>
                    <SecondaryButton 
                       onClick={() => {
                        navigate("/Register");
                        props.toggleProfileDrawer();
                      }}>
                      Zarejestruj się
                    </SecondaryButton>
                  </>
                )}
              </ProfileDrawerContainer>
            </Drawer>
          );
        };