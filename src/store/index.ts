import { configureStore } from "@reduxjs/toolkit";
import loginFormSlice from "./login";

export const rootStore :any = configureStore ({
    reducer:{
        login: loginFormSlice.reducer as any
    },
})

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;