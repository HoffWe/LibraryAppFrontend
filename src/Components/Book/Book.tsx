import {BookDto} from "./BookDto";
import {ItemPhoto,
    ItemContainer,
    DataContainer,
    ImportantInfo,
} from "./Books.styles";
import CartContext from "../../Context/CartContext";
import {useContext} from "react";
import {PrimaryButton} from "../GlobalStyle";


type BookProps = {
    book: BookDto;
};
export const Book = ({ book }: BookProps) => {
    const { addBook } = useContext(CartContext);

    const onAddToCart = () => {
        addBook(book);
    };

    // @ts-ignore
    return (
        <ItemContainer>
            <ItemPhoto src={Object.values(book.src)} alt={"Book"} />
            <DataContainer>
                    <ImportantInfo>{book.title}</ImportantInfo>
                    <span>{book.author}</span>
            </DataContainer>
            <PrimaryButton onClick={onAddToCart}>Add to cart</PrimaryButton>
        </ItemContainer>
    );
};