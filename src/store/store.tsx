import { configureStore } from "@reduxjs/toolkit";
import prSlice from "./pullRequests";

const store = configureStore({
  reducer: { pullRequests: prSlice.reducer },
});

export default store;
