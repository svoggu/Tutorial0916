import { createAction, props } from '@ngrx/store';
import { AuthPayload } from 'src/app/models/auth';
import { User } from 'src/app/models/user';

export const loginAuth = createAction(
  '[Auth] Login Auth',
  props<{ data: AuthPayload }>()
);

export const loginAuthSuccess = createAction(
  '[Auth] Login Auth Success',
  props<{ data: User }>()
);

export const loginAuthFailure = createAction(
  '[Auth] Login Auth Failure',
  props<{ error: Error }>()
);
