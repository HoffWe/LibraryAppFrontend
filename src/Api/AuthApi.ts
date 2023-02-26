import axios from "axios";
import { SignInRequest } from "../Models/Api/SignInRequest";
import { SignInResponse } from "../Models/Api/SignInResponse";
import {userApi} from "../Hooks/useAxios";


export class AuthApi {
    static signIn = async ( body: SignInRequest ) =>
        await userApi.post<SignInResponse>("/auth/signin", body);
   
}



