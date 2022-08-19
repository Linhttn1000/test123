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
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    }
  }
});

export const { actions: globalActions, reducer: globalReducer } = globalSlice;