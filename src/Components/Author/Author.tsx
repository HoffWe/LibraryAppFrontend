import { AuthorDto } from "./AuthorDto";
import { AuthorContainer, DataAuthorContainer, ImportantAuthorInfo, ItemAuthorPhoto } from "./Author.styles";
import { PrimaryButton } from "../GlobalStyle";


type AuthorProps = {
    author: AuthorDto;
  };
  
  export const Author = ({ author }: AuthorProps) => {
  
    // const showAuthor = () => {
    //   show(author)
    // };
  
    return (
      <AuthorContainer>
        <ItemAuthorPhoto src={author.src} alt={"Author"} />
        <DataAuthorContainer>
          <ImportantAuthorInfo key={author.id}>{author.name}</ImportantAuthorInfo>
        
        </DataAuthorContainer>
        
        <PrimaryButton 
        // onClick={showAuthor}
        >Show more</PrimaryButton>
        
      </AuthorContainer>
      
    );
  };
  