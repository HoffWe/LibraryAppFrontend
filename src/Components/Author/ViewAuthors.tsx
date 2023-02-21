import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
} from "@chakra-ui/react";
import "../../Models/Author/Author";
import Author from "../../Models/Author/Author";
import { AuthorApi } from "../../Api/AuthorApi";
import './ViewAuthorCss.css';


interface AddAuthorProps {
  userName: string;
}

export const ViewAuthors = (props: AddAuthorProps) => {
  const [authors, setAuthors] = useState<Author[]>([]); //domyślna wartośc stanu // dodanie czego po czym będziemy iterować
  const [search, setSearch] = useState("");

  useEffect(() => {
    // z racji tego że hook useEffect może zwracać tylko funkcję czyszczącą lub nic to tworzymy nową funkcję
    loadAuthors(); // tu musimy zawołać tą funkcję
  }, []);

  const loadAuthors = async () => {
    const result = await AuthorApi.getAuthors();
    setAuthors(result.data);
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // tu zgarniamy to co się pojawiło w inpucie
    // wywołanie podmiany wartości zmiennej
    setSearch(event.currentTarget.value);
  };

  return (
    <div id="authorContainer">
      <Input 
        type="text"
        placeholder="Podaj imię autora"
        onChange={onSearchChange}

      />
      <TableContainer
      >
        <Table >
          <Thead>
            <Tr>
              <Th>Author name</Th>
              <Th>Date of birth</Th>
              <Th> Rating </Th>
              {/* <Th>Action</Th>
              <Th>Action</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {authors
              .filter((author) => {
                return search.toLowerCase() === ""
                  ? author : author.name.toLocaleLowerCase()
                  .includes(search);
              })
              .map((author) => (
                <Tr key={author.id}>
                  <Td>{author.name}</Td>
                  <Td>{author.dateOfBirth}</Td>
                  <Td>{author.rating} / 5</Td>
                  {/* <Td><Button colorScheme='teal'onClick={handleEdit} >Edit</Button></Td>
                
                <Td><Button colorScheme='red'>Delete</Button></Td> */}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
