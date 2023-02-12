import Book from "./Book";
import { Genres } from "./Genres";

interface Author {
  id: string;
  name: string;
  dateOfBirth: string;
  books: Book[];
  genres: Genres;
  rating: number;
}

export default Author;
