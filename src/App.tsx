

import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AddAuthor } from "./Components/Author/AddAuthor";
import { SearchAuthorByName } from "./Components/Author/SearchAuthorByName";
import { ViewAuthors } from "./Components/Author/ViewAuthors";
import { useAxios } from "./Hooks/useAxios";
import { UpdateAuthor } from "./Components/Author/UpdateAuthor";
import { AuthorHomePage } from "./Components/Author/AuthorHomePage";
import { AppRouter } from "./router/App.router";


function App() {


  useAxios();

  return (
    <div>
    <AppRouter />
    </div>
  );

}

export default App;