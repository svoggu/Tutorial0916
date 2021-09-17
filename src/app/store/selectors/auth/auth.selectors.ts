import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as fromAuth from '../../reducers/auth/auth.reducer';

const authFeatureSelector = createFeatureSelector<AppState, fromAuth.State>(fromAuth.authFeatureKey);

export const loggedInUserSelector = createSelector(authFeatureSelector,
    (authState) => {
        return authState.loggedInUser
    })