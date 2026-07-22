'use client'
import { Button, Col, Form, Row } from "react-bootstrap"
import DashboardDrawer from "/component/DashboardDrawer"
import { Envelope, GeoAlt, Plus, Search, Telephone } from "react-bootstrap-icons"
import FreePlanCard from "./FreePlanCard"
import HeaderIcons from "/component/HeaderIcons"
import LatestActivity from "/component/LatestActivity"
import UserMessages from "./UserMessages"
import { useSelector } from "react-redux"
import UserContacts from "./UserContact"
import UserProfileMenu from "./UserProfileMenu"

const UserDashboardContent = () => {
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
    const { user } = useSelector((state) => state.user)
    console.log(JSON.stringify(user,null,4))
    return (
        <div className="d-flex">
            <div className="main-content flex-grow-1 m-lg-4 m-3">
                <header className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">User Dashboard</h1>
                    {/*<div className="search-box position-relative d-none d-xxl-block">
                         <Search
                            size={16}
                            className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                        />

                        <Form.Control
                            type="text"
                            className="bg-white border-0 form-control ps-5 rounded-pill"
                            placeholder="Search here..."
                        />


                    </div>*/}
                    <DashboardDrawer > 
                        <FreePlanCard />
                        <div >
                            <h3 className="card-title mb-3">Latest Activity</h3>
                            <LatestActivity />
                        </div>
                    </DashboardDrawer>
                </header>
                <section className="status bg-light rounded-4 p-4 mb-lg-4 mb-2 position-relative">
                    <img src={"/images/card-bg.png"} className="details-banner position-absolute top-0 start-0 end-0 w-100" />
                    <div className='ms-3 mt-3 z-1 position-relative'><span className='d-block details-page-profile-picture bg-purple-10 rounded-circle'><img src={user.avatar} className='details-page-profile-picture rounded-circle profile-picture-border' /></span></div>
                    <UserProfileMenu />
                    <Row className='mb-3 mt-3'>
                        <Col xs={12} md={6} xl={4}>
                            <div className='d-flex flex-column'>
                                <h2 className='logo'>{user.fullname}</h2>
                                <p className='sidebar-link text-gray-400 mt-2'>{user.role}</p>
                                {user.location && (
                                    <div className="d-flex align-items-center gap-2 text-gray-400">
                                        <GeoAlt />
                                        {user.location}
                                    </div>
                                )}
                            </div>
                        </Col>
                        {user.phone && (
                            <Col xs={12} md={6} xl={4}>
                                <div className="d-flex flex-column">
                                    <p className="text-gray-400 sidebar-link">
                                        Phone
                                    </p>

                                    <div className="d-flex align-items-center gap-lg-3 gap-2 fw-medium">
                                        <div className="bg-info text-light p-3 rounded-circle contact-icon position-relative">
                                            <Telephone
                                                size={24}
                                                className="position-absolute start-50 top-50 translate-middle"
                                            />
                                        </div>

                                        {user.phone}
                                    </div>
                                </div>
                            </Col>
                        )}
                        <Col xs={12} md={6} xl={4}>
                            <div className='d-flex flex-column'>
                                <p className='text-gray-400 sidebar-link'>Email</p>
                                <div className='d-flex align-items-center gap-lg-3 gap-2 fw-medium'><div className='text-break bg-info text-light p-3 rounded-circle contact-icon position-relative'><Envelope size={24} className='position-absolute start-50 top-50 translate-middle' />
                                </div>
                                    {userData.user.email}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col xs={12} lg={6}>
                            <div className="bg-light rounded-4 p-4 mb-lg-4 mb-2 h-100">
                                <UserContacts />
                            </div>
                        </Col>

                        <Col xs={12} lg={6}>
                            <div className="bg-light rounded-4 p-4 mb-lg-4 mb-2 h-100">
                                <UserMessages />
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
            <aside className="position-relative d-none d-xxl-block">
                <div className="right-side-bar bg-light position-sticky top-0 overflow-y-auto vh-100">
                    <div className="content m-lg-4 m-3">
                        <div className="mb-lg-4 mb-2 d-flex gap-4 justify-content-between align-items-center ">
                            <HeaderIcons />
                        </div>
                        <FreePlanCard />
                        <div >
                            <h3 className="card-title mb-3">Latest Activity</h3>
                            <LatestActivity />
                        </div>
                    </div>

                </div>
            </aside>
        </div>
    )
}

export default UserDashboardContent
