import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthPayload } from '../models/auth';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload: AuthPayload) {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map((users) => {
        const foundUser = users.find(user => user.username === payload.username);
        if (!foundUser) {
          throw new Error('No user found')
        } else {
          return foundUser;
        }
      })
    )
  }
}