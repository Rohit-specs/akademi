import { createSlice } from "@reduxjs/toolkit";

export const LatestActivitySlice = createSlice({
    name: "latestActivity",

    initialState: {
        activities: [
            {
                id: 1,
                type: "student",
                user: "Admin",
                action: "added a new student",
                target: "Samantha William",
                color: "success",
                date: "2026-07-11",
                time: "10:15 AM",
            },
            {
                id: 2,
                type: "teacher",
                user: "Admin",
                action: "added a new teacher",
                target: "Maria Historia",
                color: "primary",
                date: "2026-07-11",
                time: "11:20 AM",
            },
            {
                id: 3,
                type: "event",
                user: "Admin",
                action: "created a new event",
                target: "React Workshop",
                color: "warning",
                date: "2026-07-10",
                time: "09:30 AM",
            },
            {
                id: 4,
                type: "contact",
                user: "Admin",
                action: "added a new contact",
                target: "Tony Soap",
                color: "info",
                date: "2026-07-10",
                time: "08:15 AM",
            },
        ],
    },

    reducers: {

        addActivity: (state, action) => {

            state.activities.unshift({
                id: Date.now(),
                date: new Date().toISOString().split("T")[0],
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                ...action.payload,
            })

        }

    }

});

export const { addActivity } = LatestActivitySlice.actions;

export default LatestActivitySlice.reducer;