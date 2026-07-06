"use client"
import { Button, Col, Form, Row } from "react-bootstrap"
import DashboardDrawer from "/component/DashboardDrawer"
import HeaderIcons from "/component/HeaderIcons"
import { CameraVideo, Dot, Paperclip, Search, SendFill, ThreeDots } from "react-bootstrap-icons"
import { useState } from "react"
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
    const [selectedChat, setSelectedChat] = useState(false);
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
            <main className="p-4 bg-light rounded-4">
                <Row className="h-100">


                    <Col
                        xs={12}
                        md={4}
                        lg={4}
                        xl={3}
                        className={`sidebar-container border-end border-gray-300 ${selectedChat ? "d-none d-md-block" : ""
                            }`}
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
                        <h3 className="fs-5 text-gray-400 mb-lg-3 mb-2">Groups</h3>
                        {userData.messages.slice(0, 3).map((message) => (
                            <div
                                className="d-flex justify-content-between border-bottom border-gray-400 py-2 py-lg-3"
                                role="button"
                                onClick={() => setSelectedChat(true)}
                                key={message.id}
                            >
                                <div className="icon-link gap-2 ">
                                    <div className="user-picture overflow-hidden rounded-circle bg-purple-10">
                                        <img className="user-picture" src={message.avatar} />
                                    </div>
                                    <div>
                                        <span className="fw-medium">{message.name}</span>
                                        <small className="d-block fs-small text-gray-400">{message.message}</small>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <small className="text-gray-400">{message.time}</small>
                                    {message.unread != 0 && (
                                        <div className="ms-auto unread-message">
                                            {message.unread}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <h3 className="fs-5 text-gray-400 mb-lg-3 mb-2 mt-lg-3 mt-2">Chats</h3>
                        {userData.messages.slice(0, 3).map((message) => (
                            <div
                                className="d-flex justify-content-between border-bottom border-gray-400 py-2 py-lg-3"
                                role="button"
                                onClick={() => setSelectedChat(true)}
                                key={message.id}
                            >
                                <div className="icon-link gap-2 ">
                                    <div className="user-picture overflow-hidden rounded-circle bg-purple-10">
                                        <img className="user-picture" src={message.avatar} />
                                    </div>
                                    <div>
                                        <span className="fw-medium">{message.name}</span>
                                        <small className="d-block fs-small text-gray-400">{message.message}</small>
                                    </div>
                                </div>
                                <div>
                                    <small className="text-gray-400">{message.time}</small>
                                    {message.unread != 0 && (
                                        <div className="ms-auto unread-message">
                                            {message.unread}
                                        </div>
                                    )}
                                </div>
                            </div>

                        ))}
                        <button
                            className="mt-2 mb-2 btn bg-purple-10 text-primary fw-medium w-100 rounded-pill">
                            View More
                        </button>
                    </Col>


                    <Col
                        xs={12}
                        md={8}
                        lg={8}
                        xl={9}
                        className={`chat-container flex-column p-0 ${selectedChat
                            ? "d-flex"
                            : "d-none d-md-flex"
                            }`}
                    >

                        <div className="d-flex justify-content-between align-items-center border-bottom p-3">

                            <div className="icon-link gap-3 gap-lg-4">
                                <div className="user-picture overflow-hidden rounded-circle bg-purple-10">
                                    <img
                                        src={userData.contacts[0].avatar}
                                        className="user-picture"
                                        alt=""
                                    />
                                </div>

                                <div>
                                    <h2 className="card-title mb-1">
                                        Samantha William
                                    </h2>

                                    <small className="text-gray-400 d-flex align-items-center gap-1">
                                        <div
                                            className="bg-success dot"
                                        ></div>

                                        Online
                                    </small>
                                </div>
                            </div>

                            <div>
                                <div className="icon-link gap-3 gap-lg-4">
                                    <CameraVideo className="fs-4 text-gray-400" />
                                    <ThreeDots className="fs-4 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1 overflow-auto p-4">


                            <div className="d-flex mb-4">

                                <div>

                                    <div className="bg-light rounded-4 px-3 py-2">
                                        Hello Nabila!
                                    </div>

                                    <small className="text-gray-400 mt-1 d-block">
                                        11:32 AM
                                    </small>

                                </div>

                            </div>

                            <div className="d-flex justify-content-end mb-4">

                                <div className="text-end">

                                    <div className="bg-primary text-white rounded-4 px-3 py-2">
                                        Hello Samantha!
                                    </div>

                                    <small className="text-gray-400 mt-1 d-block">
                                        11:33 AM
                                    </small>

                                </div>

                            </div>

                            <div className="d-flex mb-4">

                                <div>

                                    <div className="bg-light rounded-4 px-3 py-2">
                                        Can I see your history homework?
                                    </div>

                                    <small className="text-gray-400 mt-1 d-block">
                                        11:34 AM
                                    </small>

                                </div>

                            </div>

                        </div>

                        <div className="border-top p-3">

                            <div className="d-flex gap-2 position-relative">

                                <Form.Control
                                    placeholder="Write your message..."
                                    className="rounded-pill p-4"
                                />

                                <Button variant="primary" className="position-absolute p-3 px-4 top-50 end-0 translate-middle-y me-2 icon-link gap-2 rounded-pill">
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
