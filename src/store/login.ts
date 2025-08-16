import { createSlice, type PayloadAction,createAsyncThunk} from '@reduxjs/toolkit';
import type {LoginState}  from '../interface/interface'; 
import { sendOTP,verifyOTP } from '../api';

const initialState: LoginState = {
  contact: '',
  otp: '',
};

export const sendOTPthunk :any= createAsyncThunk('login/sendOTP',
  async(contact:any,{rejectWithValue})=>{
    try{
      const response :any= await sendOTP(contact)
      console.log(response)
      return response?.data?.otp
    }catch (err){
      return rejectWithValue(err? console.log(err) :'')
    }
  }
)

export const verifyOTPthunk :any = createAsyncThunk('login/verifyOTP',
  async(data:any,{rejectWithValue}) =>{
    try{
      const response :any = await verifyOTP(data);
      console.log(response)
      return response
    } catch(err) {
      return rejectWithValue(err)
    }
  }
)

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
