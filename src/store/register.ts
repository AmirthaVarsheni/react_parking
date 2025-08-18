  import { createSlice } from "@reduxjs/toolkit";
  import type { RegisterState } from "../interface/interface";


const initialState = {} as RegisterState as any;

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
        setchange(state:any,action){
            console.log(state,action)

        }
    }
})

export default registerSlice
