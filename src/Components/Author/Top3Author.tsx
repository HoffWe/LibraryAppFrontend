import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button, Card, CardBody, CardFooter, Heading, Stack, Image, Text, CardHeader, SimpleGrid, Container } from "@chakra-ui/react";
import { auto } from "@popperjs/core";
import { useState, useEffect } from "react";
import { AuthorApi } from "../../Api/AuthorApi";
import Author from "../../Models/Author/Author";
import './Top3Css.css';

export const Top3Authors = () => {

    const [authors, setAuthors] = useState<Author[]>([]); //domyślna wartośc stanu // dodanie czego po czym będziemy iterować
  
    useEffect(() => {
      loadAuthors(); 
    }, []);
  
    const loadAuthors = async () => {
      const result = await AuthorApi.top3();
      setAuthors(result.data);
    };
  

    return(
        <div id="container">    
          <Container  >
          <h1> Top 3 Najlepszych autotorów!</h1>  
          {/* {authors.map((author) => ( */}
  
  <>
<SimpleGrid id="smallContainer" 
// key={author.id}
>
  <Card id = "firstcard">
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      {/* <Text>{author.name}</Text> */}
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id = "firstcard">
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id = "firstcard">
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>

</SimpleGrid>
</>
  {/* ))} */}
<h1>Top 3 najlepsze Książki!</h1>
<SimpleGrid id="secsmallcontainer">
  <Card id = "firstcard">
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id = "firstcard">
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id = "firstcard">
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
</Container>
        </div>
    )
}