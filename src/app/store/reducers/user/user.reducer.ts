import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';


export const userFeatureKey = 'user';

export interface State {
users: User[];
}

export const initialState: State = {
users: [],
};


export const reducer = createReducer(
  initialState,

);

