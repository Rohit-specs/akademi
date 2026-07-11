"use client"
import { Button, Col, Form, Row } from "react-bootstrap"
import DashboardDrawer from "/component/DashboardDrawer"
import HeaderIcons from "/component/HeaderIcons"
import { ArrowLeft, CameraVideo, Dot, Paperclip, Search, SendFill, ThreeDots } from "react-bootstrap-icons"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectChat, sendMessage } from "/store/slices/ChatSlice"
const userData = {
    "user": {
        "id": 1,
        "name": "Nabila Azalea",
        "role": "Admin",
        "location": "Jakarta, Indonesia",
        "phone": "+12 346 6789 0",
        "email": "jordan@mail.com",
        "avatar": "https://i.pravatar.cc/150?img=32",
        "coverImage": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
        "stats": {
            "contacts": 741,
            "messages": 238,
            "tasksCompleted": 124,
            "projects": 18
        }
    },
    "plan": {
        "name": "Free",
        "storage": "5 GB",
        "status": "Limited Features",
        "description": "Upgrade to Premium Plan to get more features and unlimited storage.",
        "buttonText": "Upgrade Plan"
    },
    "contacts": [
        {
            "id": 1,
            "name": "Samantha William",
            "status": "Online",
            "avatar": "https://i.pravatar.cc/150?img=5"
        },
        {
            "id": 2,
            "name": "Tony Soap",
            "status": "Busy",
            "avatar": "https://i.pravatar.cc/150?img=12"
        },
        {
            "id": 3,
            "name": "Karen Hope",
            "status": "Offline",
            "avatar": "https://i.pravatar.cc/150?img=16"
        },
        {
            "id": 4,
            "name": "Jordan Nico",
            "status": "Online",
            "avatar": "https://i.pravatar.cc/150?img=18"
        },
        {
            "id": 5,
            "name": "Nadila Adja",
            "status": "Away",
            "avatar": "https://i.pravatar.cc/150?img=24"
        }
    ],
    "messages": [
        {
            "id": 1,
            "name": "Samantha William",
            "message": "Could you send the latest report?",
            "time": "12:45 PM",
            "unread": 2,
            "avatar": "https://i.pravatar.cc/150?img=5"
        },
        {
            "id": 2,
            "name": "Tony Soap",
            "message": "Meeting starts in 30 minutes.",
            "time": "12:41 PM",
            "unread": 3,
            "avatar": "https://i.pravatar.cc/150?img=12"
        },
        {
            "id": 3,
            "name": "Karen Hope",
            "message": "I sent the updated design files.",
            "time": "12:34 PM",
            "unread": 0,
            "avatar": "https://i.pravatar.cc/150?img=16"
        },
        {
            "id": 4,
            "name": "Jordan Nico",
            "message": "Let's schedule a meeting tomorrow.",
            "time": "12:15 PM",
            "unread": 1,
            "avatar": "https://i.pravatar.cc/150?img=18"
        },
        {
            "id": 5,
            "name": "Nadila Adja",
            "message": "Thanks for your support!",
            "time": "12:04 PM",
            "unread": 0,
            "avatar": "https://i.pravatar.cc/150?img=24"
        }
    ],
    "latestActivity": [
        {
            "id": 1,
            "user": "Karen Hope",
            "action": "moved task",
            "task": "User Research",
            "from": "In Progress",
            "to": "Done",
            "date": "April 24, 2025 10:42 AM"
        },
        {
            "id": 2,
            "user": "Samantha William",
            "action": "added",
            "task": "Photos",
            "date": "April 24, 2025 10:14 AM"
        },
        {
            "id": 3,
            "user": "Tony Soap",
            "action": "completed",
            "task": "Wireframing",
            "date": "April 24, 2025 09:52 AM"
        },
        {
            "id": 4,
            "user": "Samantha William",
            "action": "created",
            "task": "New Task",
            "date": "March 30, 2025 12:45 PM"
        }
    ]
}
const ChatContent = () => {
    const { chats, groups, selectedChat } = useSelector((state) => state.chat)
    const [message, setMessage] = useState("");
    const dispatch = useDispatch()
    const handleSendMessage = () => {
        dispatch(
            sendMessage({
                type: selectedChat.type,
                conversationId: selectedChat.id,
                message: {
                    id: Date.now(),
                    sender: "me",
                    text: message,
                    time: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                },
            })
        )
        setMessage("")
    }
    const currentConversation = selectedChat.type === "chat" ? chats.find((chat) => chat.id === selectedChat.id) : groups.find((group) => group.id === selectedChat.id);
    if (!currentConversation) {
        return (
            <div className="d-flex justify-content-center align-items-center h-100">
                Select a chat to start messaging
            </div>
        )
    }
    const [showConversation, setShowConversation] = useState(false)

    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Chat</h1>
                    <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">

                        <div className="search-box position-relative d-none d-xl-inline-block">
                            <Search
                                size={16}
                                className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                            />
                            <Form.Control
                                type="text"
                                className="bg-white border-0 form-control ps-5 rounded-pill"
                                placeholder="Search here..."
                            />
                        </div>
                        <HeaderIcons />
                    </div>

                    <DashboardDrawer /></div>

            </header>
            <main className="bg-light rounded-4 chat-card">
                <Row className="h-100 position-relative g-0">
                    <Col xs={12} lg={4} xl={3}
                        className={`sidebar-container chats-border border-gray-300 p-lg-4 p-3 ${showConversation ? "d-none d-lg-block" : ""}`}
                    >
                        <h2 className="card-title mb-3 mb-lg-4">Messages</h2>
                        <div className="mb-3 mb-lg-4 w-100 search-box position-relative d-inline-block">
                            <Search
                                size={16}
                                className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                            />
                            <Form.Control
                                type="text"
                                className="bg-white border-1 border-gray-300 form-control ps-5 rounded-pill"
                                placeholder="Search here..."
                            />
                        </div>
                        <div className="chat-list-scroll">
                            <h3 className="fs-5 text-gray-400 mb-lg-3 mb-2">Chats</h3>
                            {chats.map((chat) => (
                                <div
                                    key={chat.id}
                                    className="d-flex justify-content-between border-bottom border-gray-400 py-2"
                                    role="button"
                                    onClick={() => {
                                        dispatch(
                                            selectChat({
                                                type: "chat",
                                                id: chat.id,
                                            })
                                        )
                                        setShowConversation(true)
                                    }

                                    }
                                >
                                    <div className="icon-link gap-2">
                                        <div className="flex-shrink-0 user-picture overflow-hidden rounded-circle bg-purple-10">
                                            <img
                                                className="user-picture"
                                                src={chat.avatar}
                                                alt={chat.name}
                                            />
                                        </div>

                                        <div>
                                            <span className="fw-medium">{chat.name}</span>

                                            <small className="d-block fs-small text-gray-400">
                                                {chat.lastMessage}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 text-end">
                                        <small className="text-gray-400">
                                            {chat.lastMessageTime}
                                        </small>

                                        {chat.unread > 0 && (
                                            <div className="ms-auto unread-message">
                                                {chat.unread}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <h3 className="fs-5 text-gray-400 mb-lg-3 mb-2 mt-lg-3 mt-2">Groups</h3>
                            {groups.map((group) => (
                                <div
                                    key={group.id}
                                    className="d-flex justify-content-between border-bottom border-gray-400 py-2"
                                    role="button"
                                    onClick={() => {
                                        dispatch(
                                            selectChat({
                                                type: "group",
                                                id: group.id,
                                            }))
                                        setShowConversation(true)
                                    }}>
                                    <div className="icon-link gap-2">
                                        <div className="flex-shrink-0 user-picture overflow-hidden rounded-circle bg-purple-10">
                                            <img
                                                className="user-picture"
                                                src={group.avatar}
                                                alt={group.name}
                                            />
                                        </div>
                                        <div>
                                            <span className="fw-medium">{group.name}</span>
                                            <small className="d-block fs-small text-gray-400">
                                                {group.lastMessage}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 text-end">
                                        <small className="text-gray-400">
                                            {group.lastMessageTime}
                                        </small>

                                        {group.unread > 0 && (
                                            <div className="ms-auto unread-message">
                                                {group.unread}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}</div>
                    </Col>


                    <Col xs={12} lg={8} xl={9}
                        className={`d-flex flex-column overflow-hidden h-100 p-0 ${showConversation ? "d-flex" : "d-none d-lg-flex"}`}>
                        <div className="d-flex justify-content-between align-items-center border-bottom p-lg-4 p-3">

                            <div className="icon-link gap-3 gap-lg-4">
                                <Button
                                    variant="link"
                                    className="d-lg-none p-0 text-dark"
                                    onClick={() => setShowConversation(false)}
                                >
                                    <ArrowLeft size={22} />
                                </Button>
                                <div className="user-picture overflow-hidden rounded-circle bg-purple-10">
                                    <img
                                        src={currentConversation.avatar}
                                        className="user-picture"
                                        alt={currentConversation.name}
                                    />
                                </div>

                                <div>
                                    <h2 className="card-title mb-1">
                                        {currentConversation.name}
                                    </h2>

                                    <small className="text-gray-400 d-flex align-items-center gap-1">

                                        {selectedChat.type === "chat" && (
                                            <>
                                                <div
                                                    className={`dot rounded-circle ${currentConversation.status === "Online"
                                                        ? "bg-success"
                                                        : currentConversation.status === "Busy"
                                                            ? "bg-danger"
                                                            : currentConversation.status === "Away"
                                                                ? "bg-warning"
                                                                : "bg-secondary"
                                                        }`}
                                                ></div>

                                                {currentConversation.status}
                                            </>
                                        )}

                                        {selectedChat.type === "group" && (
                                            <>
                                                <div className="dot rounded-circle bg-primary"></div>
                                                Group
                                            </>
                                        )}
                                    </small>
                                </div>
                            </div>

                            <div className="icon-link gap-3 gap-lg-4">
                                <CameraVideo className="fs-4 text-gray-400" />
                                <ThreeDots className="fs-4 text-gray-400" />
                            </div>

                        </div>

                        <div className="chat-messages p-lg-4 p-2">

                            {currentConversation.messages.map((message) => (

                                <div
                                    key={message.id}
                                    className={`d-flex mb-4 ${message.sender === "me"
                                        ? "justify-content-end"
                                        : ""
                                        }`}
                                >
                                    <div
                                        className={
                                            message.sender === "me"
                                                ? "text-end"
                                                : ""
                                        }
                                    >

                                        <div
                                            className={`rounded-4 px-3 py-2 ${message.sender === "me"
                                                ? "bg-primary text-white"
                                                : "bg-dark text-white"
                                                }`}
                                        >
                                            {message.text}
                                        </div>

                                        <small className="text-gray-400 mt-1 d-block">
                                            {message.time}
                                        </small>

                                    </div>

                                </div>

                            ))}

                        </div>

                        <div className="border-top p-3">

                            <div className="d-flex gap-2 position-relative">

                                <Form.Control
                                    placeholder="Write your message..."
                                    className="rounded-pill p-4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault()
                                            handleSendMessage()
                                        }
                                    }} />
                                <Button variant="primary" onClick={handleSendMessage} className="position-absolute p-3 px-4 top-50 end-0 translate-middle-y me-2 icon-link gap-2 rounded-pill">
                                    Send <SendFill />
                                </Button>
                                <span className="d-inline-block position-absolute top-50 end-0 translate-middle-y me-5 attach-clip"><Paperclip />
                                </span>

                            </div>

                        </div>

                    </Col>
                </Row>
            </main>
        </div >
    )
}

export default ChatContent
