import { Button, ChakraProvider, list } from "@chakra-ui/react"
import { useState } from "react"
import { AddAuthor } from "./AddAuthor"
import { ShowPage } from "./models/showPage"
import { SearchAuthorByName } from "./SearchAuthorByName"
import { UpdateAuthor } from "./UpdateAutkor"
import { ViewAuthors } from "./ViewAuthors"

export const AuthorHomePage = () => {
    
  const [showPage, setShowPage] = useState(ShowPage.list);

  const addAuthorHandler = () =>{
    setShowPage(ShowPage.addAuthor);
  }
    return(
    <ChakraProvider>
    <div className="AuthorHomePage">
    
    {showPage === ShowPage.list && ( 
      <div>
       <ViewAuthors userName={"Testowy Test"} />
       <Button colorScheme='teal' onClick={addAuthorHandler}>Add New Author</Button>
       </div>
    )}
     
{showPage === ShowPage.addAuthor && <AddAuthor userName={"Testowy"}/>}
    </div>
  </ChakraProvider>)
}