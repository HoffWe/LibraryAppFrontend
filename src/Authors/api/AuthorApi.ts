import { authorApi } from "../hook/useAxios";
import { AddAuthorRequest } from "../models/AddAuthorRequest";
import Author from "../models/Author";
import { UpdateAuthorRequest } from "../models/UpdateAuthorRequest";



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