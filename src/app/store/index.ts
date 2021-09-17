import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user/user.reducer';
import * as fromAuth from './reducers/auth/auth.reducer';


export interface AppState {

  [fromUser.userFeatureKey]: fromUser.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
