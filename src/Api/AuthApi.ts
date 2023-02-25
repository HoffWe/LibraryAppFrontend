import axios from "axios";
//import { SignInRequest } from "../Models/Api/SignInRequest";
//import { SignInResponse } from "../Models/Api/SignInResponse";
import { AuthRequest } from "../Models/Api/AuthRequest";
import { authService } from "../Models/Api/authService";



export class AuthApi {
 // static sign(arg0: { username: import("react").Dispatch<import("react").SetStateAction<string>>; email: import("react").Dispatch<import("react").SetStateAction<string>>; password: import("react").Dispatch<import("react").SetStateAction<string>>; }) {
 //     throw new Error("Method not implemented.");
 // }
  
  //static login = async (request: SignInRequest) =>
   // await axios.post<SignInResponse>("/auth/login", request);
  
   
static login = async (request:AuthRequest ) => await axios.post<authService>("/vi/auth/login", request);


}


