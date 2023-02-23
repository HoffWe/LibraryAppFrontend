import { BookDto } from "./BookDto";
import {
  ItemPhoto,
  ItemContainer,
  DataContainer,
  ImportantInfo,
} from "./Books.styles";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import { PrimaryButton } from "../GlobalStyle";
import Author from "../../Models/Book/Author";

type BookProps = {
  book: BookDto;
};

export const Book = ({ book }: BookProps) => {
  const { addBook } = useContext(CartContext);

  const onAddToCart = () => {
    addBook(book);
  };

  return (
    <ItemContainer>
      <ItemPhoto src={book.src} alt={"Book"} />
      <DataContainer>
        <ImportantInfo key={book.id}>{book.title}</ImportantInfo>
        <span>
          {/* {book.authors.map((x) => (
            <p>{x}</p>
          ))} */}
        </span>
      </DataContainer>
      <PrimaryButton onClick={onAddToCart}>Add to cart</PrimaryButton>
    </ItemContainer>
  );
};
