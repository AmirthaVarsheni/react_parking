import { createSlice, type PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
  contact: string;
  otp: string;
}

const initialState: LoginState = {
  contact: '',
  otp: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
   setField(state:any, action: PayloadAction<{ field:any,value: string }>) {
      const { field, value }  = action.payload;
      state[field] = value;
    },
    setOTP(state, action: any) {
      state.otp = action.payload;
    },
    resetLogin(state) {
      state.contact = '';
      state.otp = '';
    }
  },
});



export default loginSlice
