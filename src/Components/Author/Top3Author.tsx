import {Button, Card, CardBody, CardFooter, Heading, Stack, Image, Text, CardHeader, SimpleGrid, Container, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AuthorApi } from "../../Api/AuthorApi";
import Author from "../../Models/Author/Author";
import { ItemPhoto } from "../Book/Books.styles";
import './Top3Css.css';


export const Top3Authors = () => {

    const [authors, setAuthors] = useState<Author[]>([]); //domyślna wartośc stanu // dodanie czego po czym będziemy iterować

    useEffect(() => {
      loadAuthors(); 
    }, []);
  
    const loadAuthors = async () => {
      const result = await AuthorApi.top3();
      setAuthors(result.data.map((author) =>{
        return{
          ...author,
          src:`${process.env.PUBLIC_URL}/Images/Authors/${author.id}.jpeg`,
        }
      }));
    };


    return(
<div >  
<h1> Top 3 najlepszych autorów!</h1>    
  <Container  id="container">

  {authors.map((author) => (
  
  <>
  <SimpleGrid id="smallContainer" >

    <Card key={author.id} id = "firstcard" >
    <Box id="imgBox">
    <ItemPhoto src={author.src} alt={"Author"} />
    </Box>
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
  </Container>
        </div>
    )
}