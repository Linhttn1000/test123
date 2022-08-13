import { createSlice } from '@reduxjs/toolkit';

export interface IGlobalState {
  isLoading: boolean;
}

const initialState: IGlobalState = {
  isLoading: false
};

const globalSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {}
});

export const { actions: globalActions, reducer: globalReducer } = globalSlice;