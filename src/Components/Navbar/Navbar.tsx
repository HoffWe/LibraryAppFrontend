import { Link, Outlet } from "react-router-dom";
import AccountIcon from "../../icons/AccountIcon";

import DrawerContext from "../../Context/DrawerContext";
import { useContext } from "react";
import{NavbarContainer,NavbarLinks,NavbarIcons,NavbarLibrary,NavbarBook,NavbarAuthor} from "./NavbarStyle";



export const  Navbar = () => {
  const {  toggleProfileDrawer } = useContext(DrawerContext);
  
  return (
  <>
    <NavbarContainer>
      <NavbarLinks>
        <NavbarLibrary>
      <Link className ="Library"to ={"/"}>Nowoczesna Biblioteka</Link></NavbarLibrary>
      <NavbarBook>
       <Link className ="Book"to ={"/Book"}>Książki</Link>  </NavbarBook>
     
       <NavbarAuthor>
       <Link className ="Author"to ={"/AuthorHomePage"}>Autor</Link> </NavbarAuthor>
      
       </NavbarLinks>
   
      <NavbarIcons>
      <AccountIcon style={{ cursor: "pointer" }} 
         onClick={toggleProfileDrawer}/>
           </NavbarIcons>
        
         </NavbarContainer>
    <Outlet/>
    </>
  
  );
};
