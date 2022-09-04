import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { default as axios } from './../../shared/utils/axios';

export interface IAuthState {
  user: any;
}

const initialState: IAuthState = {
  user: null,
};

export const signIn = createAsyncThunk('auth/signIn', async (payload: { username: string; password: string; }) => {
  try {
    const { data } = await axios.post('/auth/sign-in', payload, {
      headers: { 'Content-Type': 'application/json' },
    });
    Swal.fire({
      title: 'Success',
      icon: 'success',
      text: 'Sign in successfully',
    });
    return data;
  } catch (error: any) {
    Swal.fire({
      title: 'Error',
      icon: 'error',
      text: error.response.data.message,
    });
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signOut: (state) => {
      localStorage.removeItem('currentUser');
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.data;
      localStorage.setItem('currentUser', JSON.stringify(state.user));
    });
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions };
export default authReducer;
