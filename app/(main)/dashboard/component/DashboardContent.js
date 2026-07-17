import { Col, Form, Row } from "react-bootstrap";
import { Envelope, Plus, Search, } from "react-bootstrap-icons";
import StatsItems from "./StatsItems";
import { StatsData } from "//data/StatsData";
import SchoolPerformance from "./SchoolPerformanceChart";
import SchoolCalendar from "./Calender";
import SchoolFinance from "./SchoolFinance";
import StudentPagination from "../../../../component/StudentIntuition";
import DashboardDrawer from "/component/DashboardDrawer";
import HeaderIcons from "/component/HeaderIcons";
import RightSideBarContent from "./RightSideBarContent";

const contacts = [
  {
    id: 1,
    name: "Samantha William",
    className: "Class VII-A",
    avatar: "/images/avatar1.png",
    unread: 0,
  },
  {
    id: 2,
    name: "Tony Scupp",
    className: "Class VII-A",
    avatar: "/images/avatar2.png",
    unread: 12,
  },
  {
    id: 3,
    name: "Karen Hope",
    className: "Class VII-A",
    avatar: "/images/avatar3.png",
    unread: 0,
  },
  {
    id: 4,
    name: "Jordan Nico",
    className: "Class VIII-B",
    avatar: "/images/avatar4.png",
    unread: 0,
  },
  {
    id: 5,
    name: "Nicola Adjo",
    className: "Class VII-B",
    avatar: "/images/avatar5.png",
    unread: 0,
  },
];
const foods = [
  {
    id: 1,
    title: "Beef Steak with Fried Potato",
    description: "Lorem ipsum dolor sit amet",
    image: "https://picsum.photos/300/180?1",
  },
  {
    id: 2,
    title: "Pancake with Honey",
    description: "Lorem ipsum dolor sit amet",
    image: "https://picsum.photos/300/180?2",
  },
  {
    id: 3,
    title: "Japanese Beef Ramen",
    description: "Lorem ipsum dolor sit amet",
    image: "https://picsum.photos/300/180?3",
  },
];

const DashboardContent = () => {
  return (
    <div className="d-flex">
      <div className="main-content flex-grow-1 m-lg-4 m-3 flex-shrink-0">
        <header className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
          <h1 className="logo">Dashboard</h1>
          <div className="search-box position-relative d-none d-xxl-block">
            <Search
              size={16}
              className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
            />

            <Form.Control
              type="text"
              className="bg-white border-0 form-control ps-5 rounded-pill"
              placeholder="Search here..."
            />


          </div><DashboardDrawer>
            <RightSideBarContent/>
          </DashboardDrawer>
        </header>
        <section className="status bg-light rounded-4 mb-lg-4 mb-2">
          <Row className="p-4">
            {StatsData.map((item) => (
              <Col xs={12} md={6} lg={3} key={item.id} className="icon-link justify-content-center ">
                <StatsItems {...item} />
              </Col>
            ))}
          </Row>
        </section>
        <section>
          <SchoolPerformance />
        </section>
        <Row>
          <Col xs="12" lg="6" className="mh-100"><div className="bg-light rounded-4 mb-lg-4 mb-2 p-4"><SchoolCalendar /></div></Col>
          <Col xs="12" lg="6" className="mh-100"><div className="bg-light rounded-4 mb-lg-4 mb-2 p-4"><SchoolFinance /></div></Col>
        </Row>
        <section className="student-intution">
          <div className="bg-light rounded-4 mb-lg-4 mb-2 p-4">
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
            <RightSideBarContent/>
          </div>
          <div>

          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardContent;
