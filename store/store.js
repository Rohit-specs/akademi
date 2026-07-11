import { configureStore } from "@reduxjs/toolkit";
import { EventSlice } from "./slices/EventsSlice";
import { ChatSlice } from "./slices/ChatSlice";
const store = configureStore({
    reducer:{
        "event":EventSlice.reducer,
        "chat":ChatSlice.reducer,
    }
})
export default store