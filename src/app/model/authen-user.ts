export interface AuthenUser {
    userNameOrEmailAddress?: string;
    password?: string;
    rememberClient?: boolean;

}

export interface IAuth{
    accessToken: string,
}