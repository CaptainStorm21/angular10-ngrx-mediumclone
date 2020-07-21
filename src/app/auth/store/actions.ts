import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../store/actionTypes';

export const registerAction = createAction(
   ActionTypes.REGISTER,
    props<{
        username: string;
        password: string;
        email: string
    }>() 
)