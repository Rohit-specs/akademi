'use client'
import { Search } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import FoodItems from "./FoodItems"
import HeaderIcons from "/component/HeaderIcons"
import { useState } from "react"
import { Form } from "react-bootstrap"

const FoodContent = () => {
    const [search, setSearch] = useState("")
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Food</h1>
                    <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">

                        <div className="search-box position-relative d-none d-xl-inline-block">
                            <Search
                                size={16}
                                className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                            />
                            <Form.Control
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-white border-0 form-control ps-5 rounded-pill"
                                placeholder="Search here..."
                            />

                        </div>
                        <HeaderIcons />
                    </div>
                    <DashboardDrawer />
                    </div>

            </header>
            <main className="">


                <div className='bg-light p-4 rounded-4 pb-lg-5' style={{minWidth:0}}>
                    <FoodItems value={search} />
                </div>
            </main>
        </div>
    )
}

export default FoodContent