import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../store/actionTypes';
import { RegisterRequestInterface } from 'src/app/shared/types/registerRequest.interface';
import { ViewContainerRef } from '@angular/core';

export const registerAction = createAction(
   ActionTypes.REGISTER,
    props<{
        // username: string;
        // password: string;/
        // email: string
       request: RegisterRequestInterface
    }>() 
)



