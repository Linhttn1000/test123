import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { IAuthState } from '../slices/authSlice';

const selectAuthFeature = (state: RootState): IAuthState => state.authState;

export const selectUser = createSelector(selectAuthFeature, (authState: IAuthState) => authState.user);
