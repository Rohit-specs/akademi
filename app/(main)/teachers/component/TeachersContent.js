"use client"
import { Button, Dropdown, Form, Row } from "react-bootstrap"
import { Bell, Gear, Plus, Search } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import TeachersCard from "./TeachersCard"
import Link from "next/link"
import HeaderIcons from "/component/HeaderIcons"

const TeachersContent = () => {
  return (
   <div className="m-lg-4 m-3">
                <header>
                    <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                        <h1 className="logo">Teachers</h1>
                        <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">
                           <HeaderIcons/>
                        </div>

                        <DashboardDrawer /></div>
                    <div className="d-flex justify-content-between align-items-center mb-lg-4 mb-2">
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
                        <div className="icon-link gap-3">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="outline-primary"
                                    id="dropdown-sort"
                                    className="rounded-pill px-4 py-1 custom-dropdown"
                                >
                                    Newest
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Newest</Dropdown.Item>
                                    <Dropdown.Item>Oldest</Dropdown.Item>
                                    <Dropdown.Item>Most Popular</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button as={Link} href="/teachers/add-new-teacher" className="rounded-pill btn btn-primary">
                                <Plus fontWeight={500} className="fs-4 text-light"/> New Teachers</Button>
                        </div>

                    </div>
                </header>
                <main>
                    <Row className="g-2 g-md-3 g-lg-4">
                    
                        <TeachersCard/>
                    </Row>

                 
                </main>
            </div>
  )
}

export default TeachersContent