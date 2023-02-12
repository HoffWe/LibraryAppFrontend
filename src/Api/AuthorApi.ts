import { authorApi } from "../Hooks/useAxios";
import { AddAuthorRequest } from "../Models/Author/AddAuthorRequest";
import Author from "../Models/Author/Author";
import { UpdateAuthorRequest } from "../Models/Author/UpdateAuthorRequest";



export class AuthorApi{
    static getAuthors = async () =>
    await authorApi.get<Author[]>("/author")

    static postAuthor = async (author: AddAuthorRequest) =>
    await authorApi.post("/author", author)

    static updateAuthor =async (author: UpdateAuthorRequest ) => 
    await authorApi.put("/author/{id}", author)// to pewnie nie przejdzie    
    

    // static deleteAuthor =async () => 
    // static deleteAuthor.delete("/author/{id}")    
    

}