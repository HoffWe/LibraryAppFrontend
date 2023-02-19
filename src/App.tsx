

import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AddAuthor } from "./Components/Author/AddAuthor";
import { SearchAuthorByName } from "./Components/Author/SearchAuthorByName";
import { ViewAuthors } from "./Components/Author/ViewAuthors";
import { useAxios } from "./Hooks/useAxios";
import { UpdateAuthor } from "./Components/Author/UpdateAuthor";
import { AuthorHomePage } from "./Components/Author/AuthorHomePage";
import { AppRouter } from "./router/App.router";
import { withAxiosIntercepted } from "./Hooks/withAxiosInterceptor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DrawerContextProvider } from "./Context/DrawerContext";
import { UserContextProvider } from "./Context/UserContext";


function App() {


  useAxios();

  return (
    <div>
     <UserContextProvider>
     < DrawerContextProvider>
    <AppRouter />
    <ToastContainer/>
    </DrawerContextProvider>
   
    </UserContextProvider>
    </div>
  );

}
export default withAxiosIntercepted(App);