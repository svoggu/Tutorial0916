import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AppState } from './store';
import { loginAuth } from './store/actions/auth/auth.actions';
import { loggedInUserSelector } from './store/selectors/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-tutorial';
  loggedInUser$: Observable<User | null>;

  constructor(private store: Store<AppState>){
    this.store.dispatch(loginAuth({
      data: {username: 'Bret', password: 'password'}
    }));

    this.loggedInUser$ = this.store.select(loggedInUserSelector);
  }

}
