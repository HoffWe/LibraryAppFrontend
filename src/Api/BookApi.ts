import { bookApi } from "../Hooks/useAxios";
import Book from "../Models/Author/Book";
import {BookDto} from "../Components/Book/BookDto";

export class BookApi{
    static top3Books =async () => 
    await bookApi.get<Book[]>("/books/topBook")

    static allBooks = async () =>
        await bookApi.get<BookDto[]>("/books")
}