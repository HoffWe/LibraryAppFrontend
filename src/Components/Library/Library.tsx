import Book from "../../assets/book-library.png";
import { LibraryContainer,StyleDrawinglibrary,StylePicture, StyleHeading, StyleBody} from "./LibraryStyle";
import LibraryPic from "../../assets/library.jpg";



export const Library = () => {
    
    return ( <LibraryContainer> 
    < StyleDrawinglibrary>
        <img src={LibraryPic} style ={{width: "100%", height: "100%"}} />
    </StyleDrawinglibrary>
      <StylePicture>
        <img src={Book} style={{width: "900px", height: "650px"}} />
    </StylePicture>
        <StyleHeading >
            <h1><span>Zapraszamy do Nowoczesnej Biblioteki</span></h1>
            </StyleHeading >
        <StyleBody>
            <h2>
               U Nas każdy znajdzie coś dla siebie.<br/>
                W swoich księgozbiorach posiadamy nakłady<br/> od różnych wydawnictw <br/>
               Znajdziesz u Nas różne gatunki książek wg zapotrzebowania</h2>
               </StyleBody>
   
         
        </LibraryContainer> 
    );
};