import axios from "axios";
import { SignInRequest } from "../Models/Api/SignInRequest";
import { SignInResponse } from "../Models/Api/SignInResponse";



export class AuthApi {

    
  static signIn = async (request: SignInRequest) =>
    await axios.post<SignInResponse>("/auth/login", request);
  
   }


