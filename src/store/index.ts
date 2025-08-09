import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login";

export const rootStore :any = configureStore ({
    reducer:{
        login: loginSlice.reducer as any
    },
})

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;