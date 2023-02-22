import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,Text,
  TableContainer,
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Container,
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
    <div>
      <div id="authorSearch">
      <Input  
        type="text"
        placeholder="Podaj imię autora"
        onChange={onSearchChange}
        
      /></div>
        
      <div id="mainContainer">
            {authors
              .filter((author) => {
                return search.toLowerCase() === ""
                  ? author : author.name.toLocaleLowerCase()
                  .includes(search);
              })
              .map((author) => (
  
                <>
                <SimpleGrid id="smallContainer" >
              
                  <Card key={author.id} id = "card" >
                    <CardHeader>
                      <Heading size='md'>{author.name}</Heading>
                    </CardHeader>
                    <CardBody id="cardBody">
                      <Text>{author.description}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button>View here</Button>
                    </CardFooter>
                  </Card>
                  
              
                </SimpleGrid>
              </>
                ))}
      </div>
      </div>

  );
};
