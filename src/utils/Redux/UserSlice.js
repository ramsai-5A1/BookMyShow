import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        location: "Visakhapatnam"
    },
    reducers: {
        modifyLocation: (state, action) => {
            state.location = action.payload;
        }
    }
});


export const { modifyLocation } = UserSlice.actions;
export default UserSlice.reducer;