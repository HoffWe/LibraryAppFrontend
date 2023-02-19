import { authorizedApi } from "../Hooks/withAxiosInterceptor";
import { UserResponse } from "../Models/Api/UserResponse";

export class UserApi {
  static getUser = async () =>
    await authorizedApi.get<UserResponse>("/user/getUser");
}