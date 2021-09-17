import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { loginAuthSuccess } from '../../actions/auth/auth.actions';


export const authFeatureKey = 'auth';

export interface State {
  loggedInUser: User | null;
}

export const initialState: State = {
loggedInUser: null,
};


export const reducer = createReducer(
  initialState,
  on(loginAuthSuccess, (state, action) => {
    return {
      ...state, loggedInUser: action.data}
  })

);

