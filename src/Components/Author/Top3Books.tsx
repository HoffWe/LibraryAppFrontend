import { Container,Text, SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BookApi } from "../../Api/BookApi";
import Book from "../../Models/Author/Book";
import './Top3Css.css';


export const Top3Books = () => {
    const [books, setBooks] = useState<Book[]>([]);
    
    useEffect(()=>{
      loadBooks();
    }, []);

    const loadBooks =async () => {
      const result = await BookApi.top3Books();
      setBooks(result.data)
      
    }

    return(
        <div>
<h1>Top 3 najlepsze książki!</h1>
  <Container id="bookcontainer">
    {books.map((book)=>(
      <>

<SimpleGrid id="booksmallcontainer">
  <Card key={book.id} id = "bookcard">
    <CardHeader>
      <Heading size='md'>{book.title}</Heading>
    </CardHeader>
    <CardBody id="bookCardBody">
      <Text>Lorem ipsum dolor sit amet. Est eaque voluptatum qui 
          culpa doloribus aut repudiandae similique et quidem illum.
           Ea beatae distinctio ut nostrum ullam ex doloremque error 
           ab corrupti quibusdam ut animi incidunt aut sapiente 
           illum id quia deleniti!</Text>
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