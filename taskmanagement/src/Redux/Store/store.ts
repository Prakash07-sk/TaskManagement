import { rootReducer } from "./RootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { ThunkDispatch, thunk } from "redux-thunk";





  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
      }).concat(thunk),
  });

  export type IAppDispatch = ThunkDispatch<IAppDispatch, any, any>


export default store;