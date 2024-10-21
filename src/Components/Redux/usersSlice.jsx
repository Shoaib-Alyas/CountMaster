import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 28 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 34 },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', age: 25 },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', age: 30 },
    { id: 5, name: 'David Brown', email: 'david.brown@example.com', age: 42 },
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;