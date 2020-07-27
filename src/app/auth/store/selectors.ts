import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../shared/types/appState.interface';
import { AuthStateInterface } from '../../shared/types/authState.interface';


export const authFeatureSelector = createFeatureSelector<
    //global state
    AppStateInterface,
    //part of the state we want to get
    AuthStateInterface
    >('auth')

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
)