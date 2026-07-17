import { configureStore } from "@reduxjs/toolkit";
import { EventSlice } from "./slices/EventsSlice";
import { ChatSlice } from "./slices/ChatSlice";
import { LatestActivitySlice } from "./slices/ActivitySlice";
import { StudentSlice } from "./slices/StudentSlice";
import { TeacherSlice } from "./slices/TeacherSlice";
import { FoodSlice } from "./slices/FoodSlice";
const store = configureStore({
    reducer:{
        "event":EventSlice.reducer,
        "chat":ChatSlice.reducer,
        "latestActivity":LatestActivitySlice.reducer,
        "student":StudentSlice.reducer,
        "teacher":TeacherSlice.reducer,
        "food": FoodSlice.reducer, 
    }
})
export default store