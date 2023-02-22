import { bookApi } from "../Hooks/useAxios";
import Book from "../Models/Author/Book";

export class BookApi{
    static top3Books =async () => 
    await bookApi.get<Book[]>("/books/topBook")
}