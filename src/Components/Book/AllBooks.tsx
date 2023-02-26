import React, { useEffect, useState } from "react";
import { BookDto } from "./BookDto";
import { StoreContainer, ItemsContainer } from "./AllBooks.styles";
import { Book } from "./Book";
import { ChakraProvider, Input } from "@chakra-ui/react";
import { BookApi } from "../../Api/BookApi";
import { Header } from "../Author/Top3.style";

export const AllBooks = () => {
  const [books, setBooks] = useState<BookDto[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await BookApi.allBooks();
    setBooks(
      result.data.map((book) => {
        return {
          ...book,
          src: `${process.env.PUBLIC_URL}/Images/Books/${book.id}.jpeg`,
        };
      })
    );
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search.length > 0) {
      const filteredBooks = books.filter((books) =>
        books.title.toLowerCase().includes(search.toLowerCase())
      );
      setBooks(filteredBooks);
    } else loadBooks();
  }, [search]);

  return (
    <ChakraProvider>
      <StoreContainer>
        <Input
          type="text"
          placeholder="Podaj tytuł książki"
          onChange={onSearchChange}
        />
        <Header><h1>Wypożycz książkę, którą zawsze chciałeś przeczytać !</h1></Header>
        {books.length > 0 ? (
          <>
            <ItemsContainer>
              {books?.map((x) => (
                <Book book={x} />
              ))}
            </ItemsContainer>
          </>
        ) : (
          <h2>Nie mamy aktualnie żadnych produktów, zajrzyj do nas później</h2>
        )}
      </StoreContainer>
    </ChakraProvider>
  );
};
