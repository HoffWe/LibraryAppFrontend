import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AuthorApi } from "../../Api/AuthorApi";
import Author from "../../Models/Author/Author";

export const Top3Authors = () => {

    const [authors, setAuthors] = useState<Author[]>([]); //domyślna wartośc stanu // dodanie czego po czym będziemy iterować
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      loadAuthors(); 
    }, []);
  
    const loadAuthors = async () => {
      const result = await AuthorApi.getAuthors();
      setAuthors(result.data);
    };
  

    return(
        <div>      <TableContainer
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
        </TableContainer></div>
    )
}