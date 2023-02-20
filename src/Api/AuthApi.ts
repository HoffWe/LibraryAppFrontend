import axios from "axios";
import { SignInRequest } from "../Models/Api/SignInRequest";
import { SignInResponse } from "../Models/Api/SignInResponse";


export class AuthApi {
  static sign(arg0: { username: import("react").Dispatch<import("react").SetStateAction<string>>; email: import("react").Dispatch<import("react").SetStateAction<string>>; password: import("react").Dispatch<import("react").SetStateAction<string>>; }) {
      throw new Error("Method not implemented.");
  }
  
  
  static signIn = async (request: SignInRequest) =>
    await axios.post<SignInResponse>("/auth/signin", request);
  
   
}



