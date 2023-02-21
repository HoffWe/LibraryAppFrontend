import React, {useState} from "react";
import {BooksList} from "../../Models/Book/BooksList";
import {BookDto} from "./BookDto";
import {StoreContainer
,ItemsContainer,
PaginationContainer,
} from "./AllBooks.styles";
import {Book} from "./Book";

export const AllBooks = ()=> {
    const [books, setBooks] = useState<BookDto[]>(BooksList)

    return (

        <StoreContainer>
            <h1>Wybierz książkę, którą zawsze chciałeś przeczytać !</h1>
            {books?.length >0 ? (
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



    )}