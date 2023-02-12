import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  List,
  ListItem,
  Box,
  Button,
} from "@chakra-ui/react";
import "../../Models/Author/Author";
import Author from "../../Models/Author/Author";
import { AuthorApi } from "../../Api/AuthorApi";
import { UpdateAuthor } from "./UpdateAuthor";
import { ShowPage } from "../../Models/Author/showPage";



interface AddAuthorProps{
  userName: string;
}

export const ViewAuthors = (props: AddAuthorProps) => {
  const [authors, setAuthors] = useState<Author[]>([]);//domyślna wartośc stanu // dodanie czego po czym będziemy iterować




  useEffect(() => {// z racji tego że hook useEffect może zwracać tylko funkcję czyszczącą lub nic to tworzymy nową funkcję
    loadAuthors(); // tu musimy zawołać tą funkcję
  },[]);

  const loadAuthors = async () => {
    const result = await AuthorApi.getAuthors(

    )
      setAuthors(result.data)
  }

  const handleEdit = () =>{
////////////
  }


  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Author name</Th>
              <Th>Date of birth</Th>
              <Th> Rating </Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>

            {
              authors.map((author)=>(
                <Tr
                 key = {author.id} >
                <Td>{author.name}</Td> 
                <Td>{author.dateOfBirth}</Td>
                <Td>{author.rating}</Td>
                <Td><Button colorScheme='teal'onClick={handleEdit} >Edit</Button></Td>
                
                <Td><Button colorScheme='red'>Delete</Button></Td>
              </Tr>
              ))
            }

          </Tbody>
        </Table>
        </TableContainer>      
    </div>
  );
};
