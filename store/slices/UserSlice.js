import { createSlice } from "@reduxjs/toolkit";

const defaultUser = {
    id: null,
    fullname: "",
    email: "",
    phone: null,
    location: null,
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=68",
};

const initialState = {
    user: defaultUser,

    contacts: [
        {
            id: 1,
            name: "Samantha William",
            email: "samantha@gmail.com",
            grade: "VII A",
            avatar: "https://i.pravatar.cc/150?img=5",
        },
        {
            id: 2,
            name: "Tony Soap",
            email: "tony@gmail.com",
            grade: "VII A",
            avatar: "https://i.pravatar.cc/150?img=12",
        },
        {
            id: 3,
            name: "Karen Hope",
            email: "karen@gmail.com",
            grade: "VII B",
            avatar: "https://i.pravatar.cc/150?img=16",
        },
        {
            id: 4,
            name: "Jordan Nico",
            email: "jordan@gmail.com",
            grade: "VIII A",
            avatar: "https://i.pravatar.cc/150?img=18",
        },
        {
            id: 5,
            name: "Nadila Adja",
            email: "nadila@gmail.com",
            grade: "VIII B",
            avatar: "https://i.pravatar.cc/150?img=24",
        },
    ],
}

export const UserSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        loginUser(state, action) {
            state.user = action.payload;
        },

        logoutUser(state) {
            state.user = defaultUser;
        },

        updateUser(state, action) {
            state.user = {
                ...state.user,
                ...action.payload,
            }

            const users =
                JSON.parse(localStorage.getItem("users")) || []

            const updatedUsers = users.map((user) =>
                user.id === state.user.id
                    ? { ...user, ...action.payload }
                    : user
            )

            localStorage.setItem(
                "users",
                JSON.stringify(updatedUsers)
            )
        },

        addContact(state, action) {
            state.contacts.unshift({
                id: Date.now(),
                ...action.payload,
            })
        },

        updateContact(state, action) {
            const { id, ...data } = action.payload

            const contact = state.contacts.find(
                (contact) => contact.id === id
            )

            if (contact) {
                Object.assign(contact, data);
            }
        },

        removeContact(state, action) {
            state.contacts = state.contacts.filter(
                (contact) => contact.id !== action.payload
            )
        },
    },
})

export const {
    loginUser,
    logoutUser,
    updateUser,
    addContact,
    updateContact,
    removeContact,
} = UserSlice.actions

export default UserSlice.reducer