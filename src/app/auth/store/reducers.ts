import { AuthStateInterface } from '../../shared/types/authState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { registerAction } from '../../auth/store/actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

//creating a reducer function - function will change the intial state in the function
const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}