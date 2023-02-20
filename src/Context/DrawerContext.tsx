import React, { createContext, useState } from "react";
import { DrawerContextType } from "../Models/Drawer/DrawerContextType";
import { ProfileDrawer } from "../Components/Drawer/ProfileDrawer";

const defaultSettings: DrawerContextType = {
  isCartDrawerOpen: false,
  toggleCartDrawer: () => {},
  isProfileDrawerOpen: false,
  toggleProfileDrawer: () => {},
};

export const DrawerContext = createContext<DrawerContextType>(defaultSettings);

export const DrawerContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] =
    useState<boolean>(false);

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  };

  const toggleProfileDrawer = () => {
    setIsProfileDrawerOpen(!isProfileDrawerOpen);
  };

  return (
    <DrawerContext.Provider
      value={{
        isCartDrawerOpen,
        toggleCartDrawer,
        isProfileDrawerOpen,
        toggleProfileDrawer,
      }}
    >
      {children}
      
      <ProfileDrawer
        isProfileDrawerOpen={isProfileDrawerOpen}
        toggleProfileDrawer={toggleProfileDrawer}
      />
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
