import { Bell, Gear, Search } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import { Form } from "react-bootstrap"
import FoodItems from "./FoodItems"

const FoodContent = () => {
  return (
   <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Events</h1>
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
                        <span className="p-2 rounded-pill bg-light"><Bell className="text-gray-400 fs-4" /></span>
                        <span className="p-2 rounded-pill bg-light"><Gear className="text-gray-400 fs-4" /></span>

                        <span className="icon-link gap-3">
                            <span>
                                <div className="fs-small">Nabila A.</div>
                                <small className="text-gray-400 ms-auto">Admin</small>
                            </span>
                            <span className="rounded-circle user-picture bg-purple-10">
                                <img src={"https://i.pravatar.cc/150?img=2"} className="user-picture rounded-circle" />
                            </span>
                        </span>
                    </div>

                    <DashboardDrawer /></div>

            </header>
            <main className="">
            
                  
                        <div className='bg-light p-4 rounded-4 pb-lg-5'>
                            <FoodItems/>
                        </div>

                   
                   


            </main>
        </div>
  )
}

export default FoodContent