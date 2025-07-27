import { createSlice } from '@reduxjs/toolkit'
import type { Login } from '../interface/login';

type loginState = {
    login:Login[];
};

const initialState:loginState = {
    login: [] 
};

const loginFormSlice = createSlice({
    name:'loginForm',
    initialState,
     reducers: {
    setLogin: (state, action) => {
      state.login.push(action.payload);
    },
    clearLogin: (state) => {
      state.login = [];
    },
  },


})

export default loginFormSlice