import { configureStore } from "@reduxjs/toolkit";
import prSlice from "./pullReq/slice";

const store = configureStore({
  reducer: { pullRequests: prSlice.reducer },
});

export default store;
