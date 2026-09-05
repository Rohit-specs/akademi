"use client"
import DashboardDrawer from "/component/DashboardDrawer"
import HeaderIcons from "/component/HeaderIcons"
import LatestActivity from "/component/LatestActivity"

const ActivityPageContent = () => {
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Notification & Latest Activity</h1>
                    <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">

                        {/* <div className="search-box position-relative d-none d-xl-inline-block">
                            <Search
                                size={16}
                                className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                            />
                            <Form.Control
                                type="text"
                                className="bg-white border-0 form-control ps-5 rounded-pill"
                                placeholder="Search here..."
                            />

                        </div> */}
                        <HeaderIcons />
                    </div>

                    <DashboardDrawer /></div>

            </header>
            <main className="p-4 bg-light rounded-4">
                <div className="w-100 px-2 px-md-3 py-3">
                    <LatestActivity />
                </div>
            </main>
        </div >
    )
}

export default ActivityPageContent
