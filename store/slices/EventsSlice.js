import { createSlice } from "@reduxjs/toolkit";
export const EventSlice = createSlice(
    {
        name: "event",
        initialState: {
            events: []
        },
        reducers: {
            addEvent: (state, action) => {
                state.events.push({
                    id: state.events.length+1,
                    className: action.payload.className,
                    subject: action.payload.subject,
                    date: action.payload.date,
                    startTime: action.payload.startTime,
                    endTime: action.payload.endTime
                });
            },
        }
    }
)
export const { addEvent } = EventSlice.actions
export default EventSlice.reducer