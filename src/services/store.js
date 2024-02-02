import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
//configure a store as a global state thats save the entire information of the App
// but in most cases we don't need the entire state , we only need to reduce it to a specific slice of data in this case it's going to be the article Api meaning: we want to just get something from this Api,  to be able to make this work we add it as a reducer in the middleware

export const store = configureStore({
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
