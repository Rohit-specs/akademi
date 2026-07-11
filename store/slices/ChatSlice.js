import { createSlice } from "@reduxjs/toolkit";

export const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        selectedChat: {
            type: "chat",
            id: 1,
        },
        groups: [
            {
                id: 1,
                name: "React Developers",
                avatar: "https://i.pravatar.cc/150?img=11",
                unread: 3,
                lastMessage: "Let's meet at 5 PM",
                lastMessageTime: "10:25 AM",
                messages: [
                    {
                        id: 1,
                        sender: "other",
                        text: "Welcome everyone 👋",
                        time: "09:30 AM",
                    },
                ],
            },
            {
                id: 2,
                name: "Design Team",
                avatar: "https://i.pravatar.cc/150?img=12",
                unread: 0,
                lastMessage: "UI approved",
                lastMessageTime: "09:15 AM",
                messages: [],
            },
            {
                id: 3,
                name: "JavaScript Club",
                avatar: "https://i.pravatar.cc/150?img=13",
                unread: 5,
                lastMessage: "Assignment uploaded",
                lastMessageTime: "Yesterday",
                messages: [],
            },
            {
                id: 4,
                name: "Science Project",
                avatar: "https://i.pravatar.cc/150?img=14",
                unread: 1,
                lastMessage: "Presentation tomorrow",
                lastMessageTime: "11:45 AM",
                messages: [],
            },
            {
                id: 5,
                name: "Sports Club",
                avatar: "https://i.pravatar.cc/150?img=15",
                unread: 0,
                lastMessage: "Practice at 6 PM",
                lastMessageTime: "Monday",
                messages: [],
            },
            {
                id: 6,
                name: "Class 12-A",
                avatar: "https://i.pravatar.cc/150?img=16",
                unread: 8,
                lastMessage: "Exam schedule released",
                lastMessageTime: "08:50 AM",
                messages: [],
            },
        ],

        chats: [
            {
                id: 1,
                name: "Samantha William",
                avatar: "https://i.pravatar.cc/150?img=1",
                role: "Student",
                status: "Online",
                unread: 2,
                lastMessage: "Can you send the notes?",
                lastMessageTime: "11:20 AM",
                messages: [
                    {
                        id: 1,
                        sender: "other",
                        text: "Hello 👋",
                        time: "11:10 AM",
                    },
                    {
                        id: 2,
                        sender: "me",
                        text: "Hi Samantha!",
                        time: "11:11 AM",
                    },
                ],
            },

            {
                id: 2,
                name: "Tony Soap",
                avatar: "https://i.pravatar.cc/150?img=2",
                role: "Student",
                status: "Busy",
                unread: 0,
                lastMessage: "Thank you!",
                lastMessageTime: "Yesterday",
                messages: [],
            },

            {
                id: 3,
                name: "Maria Historia",
                avatar: "https://i.pravatar.cc/150?img=3",
                role: "Teacher",
                status: "Online",
                unread: 4,
                lastMessage: "Please submit your assignment.",
                lastMessageTime: "09:40 AM",
                messages: [],
            },

            {
                id: 4,
                name: "Karen Hope",
                avatar: "https://i.pravatar.cc/150?img=4",
                role: "Student",
                status: "Offline",
                unread: 0,
                lastMessage: "See you tomorrow.",
                lastMessageTime: "Monday",
                messages: [],
            },

            {
                id: 5,
                name: "John Smith",
                avatar: "https://i.pravatar.cc/150?img=5",
                role: "Student",
                status: "Online",
                unread: 1,
                lastMessage: "Okay 👍",
                lastMessageTime: "10:55 AM",
                messages: [],
            },

            {
                id: 6,
                name: "Emma Watson",
                avatar: "https://i.pravatar.cc/150?img=6",
                role: "Teacher",
                status: "Away",
                unread: 0,
                lastMessage: "Meeting postponed.",
                lastMessageTime: "Yesterday",
                messages: [],
            },

            {
                id: 7,
                name: "David Miller",
                avatar: "https://i.pravatar.cc/150?img=7",
                role: "Student",
                status: "Online",
                unread: 7,
                lastMessage: "Where are you?",
                lastMessageTime: "08:30 AM",
                messages: [],
            },

            {
                id: 8,
                name: "Sophia Brown",
                avatar: "https://i.pravatar.cc/150?img=8",
                role: "Teacher",
                status: "Offline",
                unread: 0,
                lastMessage: "Great work!",
                lastMessageTime: "Sunday",
                messages: [],
            },

            {
                id: 9,
                name: "James Wilson",
                avatar: "https://i.pravatar.cc/150?img=9",
                role: "Student",
                status: "Busy",
                unread: 2,
                lastMessage: "I'll call you later.",
                lastMessageTime: "12:05 PM",
                messages: [],
            },

            {
                id: 10,
                name: "Olivia Taylor",
                avatar: "https://i.pravatar.cc/150?img=10",
                role: "Teacher",
                status: "Online",
                unread: 0,
                lastMessage: "Excellent presentation!",
                lastMessageTime: "Friday",
                messages: [],
            },
        ],
    },
    reducers: {
        selectChat: (state, action) => {
            state.selectedChat = action.payload
            const list = action.payload.type === "group" ? state.groups : state.chats
            const conversation = list.find(
                (item) => item.id === action.payload.id
            )
            if (conversation) {
                conversation.unread = 0
            }
        },
        sendMessage: (state, action) => {
            const { type, conversationId, message } = action.payload
            const list = type === "group" ? state.groups : state.chats
            const conversation = list.find(
                (item) => item.id === conversationId
            )
            if (conversation) {
                conversation.messages.push(message)
                conversation.lastMessage = message.text
                conversation.lastMessageTime = message.time
            }
        },
        addChat: (state, action) => {
            state.chats.push({
                id: state.chats.length + 1,
                name: action.payload.name,
                avatar: action.payload.avatar,
                role: action.payload.role,
                status: "Offline",
                unread: 0,
                messages: [],
            })
        },
    }
})
export const { sendMessage, selectChat, addChat } = ChatSlice.actions
export default ChatSlice.reducer