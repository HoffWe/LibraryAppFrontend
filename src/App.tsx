import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AddAuthor } from "./Authors/AddAuthor";
import { SearchAuthorByName } from "./Authors/SearchAuthorByName";
import { ViewAuthors } from "./Authors/ViewAuthors";
import { useAxios } from "./Authors/hook/useAxios";
import { UpdateAuthor } from "./Authors/UpdateAutkor";
import { AuthorHomePage } from "./Authors/AuthorHomePage";


function App() {

<<<<<<< HEAD
  useAxios();

  return (
    <AuthorHomePage />
  );
=======
  useAxios();

  return (
    <AuthorHomePage />
  );
>>>>>>> master
}

export default App;