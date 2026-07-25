import { Col, Form, Row } from "react-bootstrap";
import StatsItems from "./StatsItems";
import SchoolPerformance from "./SchoolPerformanceChart";
import SchoolCalendar from "./Calender";
import SchoolFinance from "./SchoolFinance";
import StudentPagination from "../../../../component/StudentIntuition";
import DashboardDrawer from "/component/DashboardDrawer";
import HeaderIcons from "/component/HeaderIcons";
import RightSideBarContent from "./RightSideBarContent";


const DashboardContent = () => {
  return (
    <div className="d-flex">
      <div className="main-content flex-grow-1 m-lg-4 m-3">
        <header className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
          <h1 className="logo">Dashboard</h1>
          <DashboardDrawer>
            <RightSideBarContent />
          </DashboardDrawer>
        </header>
        <section className="status bg-light rounded-4 mb-lg-4 mb-2">
          <StatsItems />
        </section>
        <section>
          <SchoolPerformance />
        </section>
        <Row>
          <Col xs="12" lg="6" className="mh-100"><div className="bg-light rounded-4 mb-lg-4 mb-2 p-4"><SchoolCalendar /></div></Col>
          <Col xs="12" lg="6" className="mh-100"><div className="bg-light rounded-4 mb-lg-4 mb-2 p-4"><SchoolFinance /></div></Col>
        </Row>
        <section className="student-intution">
          <div className="bg-light rounded-4 mb-lg-4 mb-2 p-4" style={{minWidth:0}}>
            <StudentPagination />
          </div>
        </section>
      </div>
      <aside className="position-relative d-none d-xxl-block">
        <div className="right-side-bar bg-light position-sticky top-0 overflow-y-auto vh-100">
          <div className="content m-lg-4 m-3">
            <div className="mb-lg-4 mb-2 d-flex gap-4 justify-content-between align-items-center ">
              <HeaderIcons />
            </div>
            <RightSideBarContent />
          </div>
          <div>

          </div>
        </div>
      </aside>
    </div>
  )
}

export default DashboardContent