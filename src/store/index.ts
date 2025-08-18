import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login";
import registerSlice from "./register";
export const rootStore :any = configureStore ({
    reducer:{
        login: loginSlice.reducer as any,
        register: registerSlice.reducer as any
    },
})

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;