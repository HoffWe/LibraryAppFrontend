import axios from "axios";
import { LoginRequest } from "../Models/Api/LoginRequest";
import { JWTResponse} from "../Models/Api/JWTResponse";
import { SignupRequest } from "../Models/Api/SignupRequest";
import { MessageRespone } from "../Models/Api/MessageResponse";



export class AuthApi {
  
   
static signin = async (request:LoginRequest ) => await axios.post<JWTResponse>("/auth/signin", request);

static signup = async(request:SignupRequest) => await axios.post<MessageRespone>("/auth/signup", request);


}


