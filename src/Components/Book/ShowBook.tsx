import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BookDto } from "./BookDto";
import { BookContainer, Header, Info, PrimaryButton } from "./ShowBook.style";


export const ShowBook = () => {
  const [book, setBook] = useState<BookDto[]>([]); 

  const { id } = useParams();

  useEffect(() => {
    loadBook(); 
  }, []);

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/api/books/${id}`);
    setBook(result.data);
  };

  return ( 
//   <div >
    
//     <h2>Opis tej książki pojawi się wkrótce</h2>

//            <Link to={"/"}>
//              <PrimaryButton>Home</PrimaryButton>
//            </Link>
//            </div>
  
    <BookContainer>

      {book.map((book) => (

        <>
          <Header>
            <p  >
              Tytuł książki:<br></br> {book.title}
            </p>
          </Header>
          <Info>
            <div id="aBirth">
              <p>
                Ocena:<br></br> 
              </p>
            </div>
            <div id="aDesc">
              <p>
                Opis:<br>Lorem ipsum dolor sit amet. 
                At illo nesciunt ea reiciendis repellat
                 At beatae consequatur et harum 
                 provident ab quas excepturi. 
                 Ut alias nisi sit vitae ipsam est 
                 esse officia. Et illum recusandae in 
                 tempora omnis est officiis dolor! Non 
                 maiores sunt ut dolor dolorum est 
                 quasi repellendus eos quis fugit!</br>
              </p>
            </div>
          </Info>
          <Link to={"/"}>
            <PrimaryButton>Home</PrimaryButton>
          </Link>
        </>
 ))} 

    </BookContainer>
  );
};


