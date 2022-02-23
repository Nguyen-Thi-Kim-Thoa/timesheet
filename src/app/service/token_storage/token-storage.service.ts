// import { Injectable } from '@angular/core';
// import { AuthenUser } from 'src/app/model/authen-user';
// const TOKEN_KEY = 'auth-token';
// const USER_KEY = 'auth-user';

// @Injectable({
//   providedIn: 'root',
// })
// export class TokenStorageService {
//   authenUser: AuthenUser;
//   constructor() {}

//   signOut(): void {
//     localStorage.clear();
//   }

//   public saveToken(token: string) {
//     localStorage.removeItem('accessToken');
//     localStorage.setItem('accessToken', token);
//   }

//   public getToken() {
//     return localStorage.getItem('accessToken');
//   }

//   public saveUser(user: AuthenUser) {
//     localStorage.removeItem(USER_KEY);
//     localStorage.setItem(USER_KEY, JSON.stringify(user));
//   }

//   public getUser() {
//     const user = window.sessionStorage.getItem(USER_KEY);
//     if (user) {
//       return JSON.parse(user);
//     }

//     return {};
//   }
// }
