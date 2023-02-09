import {useState} from "react";
import {Genres} from "../Const/Genres";

export const AddBook = () => {
    const [book,setBook] = useState(
        {title:"", authorsId:[""],isbn:"",quantity:"",releaseDate:"",genres:[]});
    const [wasEdited,setWasEdited] = useState<boolean>(false)
    const [isError,setIsError]= useState<boolean>(true)
    // setBook(prevState => {return {...prevState,genres: Genres.COOKBOOK}})
    const addBook = () => {
        console.log({
            book
        });
    };

    const onContentChanged =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setBook(prevState => {
            return {...prevState,[e.target.name]:e.target.value}
        });
        setWasEdited(true);
        setIsError(e.target.value.length <= 0);
    };
    const onSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setBook(prevState => {
            return{...prevState,[e.target.name]:e.target.value}
        })
    }

    return (
        <div>
            {/* UserName - z zalogowanego użytkownika */}
            <input
                value={book.title}
                placeholder={"Podaj tytuł książki"}
                onChange={onContentChanged}
                name="title"
                type="text"
            ></input>
            {isError && wasEdited && (
                <p style={{ color: "red" }}>Nie ma ksiązki bez tytułu</p>
            )}
            <input
                value={book.authorsId}
                placeholder={"Podaj autora"}
                onChange={onContentChanged}
                name="authorsId"
            ></input>
            {isError && wasEdited && (
                <p style={{ color: "red" }}>Nie ma ksiązki bez tytułu</p>
            )}
            <input
                value={book.isbn}
                placeholder={"Podaj numer ISBN"}
                onChange={onContentChanged}
                name="isbn"
                type="number"
            ></input>
            <input
                value={book.quantity}
                placeholder={"Podaj ilość książek"}
                onChange={onContentChanged}
                name="quantity"
                type="number"
            ></input>
            {isError && wasEdited && (
                <p style={{ color: "red" }}>Nie ma ksiązki bez tytułu</p>
            )}
            <input
                value={book.releaseDate}
                placeholder={"Podaj datę wydania książki"}
                onChange={onContentChanged}
                name="releaseDate"
                type="date"
            ></input>
            <select multiple
                    value={book.genres}
                    placeholder={"Podaj gatunek książki"}
                    onChange={onSelectChanged}
                    name="genres"
            >
            </select>

            <div
                style={{
                    display: "flex",
                    margin: "16px 0",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "24px",
                    cursor: "pointer",
                }}
            >
            </div>
            <button disabled={isError} onClick={addBook}>
                Dodaj
            </button>
        </div>
    );
};
