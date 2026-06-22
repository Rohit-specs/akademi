import { Col, Form, Row } from "react-bootstrap";
import { Bell, Envelope, Gear, Plus, Search, } from "react-bootstrap-icons";
import StatsItems from "./StatsItems";
import { StatsData } from "//data/StatsData";
import SchoolPerformance from "./SchoolPerformanceChart";
import SchoolCalendar from "./Calender";
import SchoolFinance from "./SchoolFinance";
import StudentPagination from "./StudentIntuition";
import DashboardDrawer from "/component/DashboardDrawer";

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
      <div className="main-content flex-grow-1 m-lg-4 m-3">
        <header className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
          <h1 className="logo">Dashboard</h1>
          <div className="search-box position-relative d-none d-xl-block">
            <Search
              size={16}
              className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
            />

            <Form.Control
              type="text"
              className="bg-white border-0 form-control ps-5 rounded-pill"
              placeholder="Search here..."
            />


          </div><DashboardDrawer />
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
          {/* <div className="section-title rounded-4 mb-lg-4 mb-2 p-4 bg-light">
            <h2 className="page-title">School Performance</h2>
            <div className="icon-link">
              
            </div>
          </div> */}
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
      <aside className="position-relative d-none d-xl-block">
        <div className="right-side-bar bg-light position-sticky top-0 overflow-y-auto vh-100">
          <div className="content m-lg-4 m-3">
            <div className="mb-lg-4 mb-2 d-flex gap-4 justify-content-between align-items-center ">
              <span><Bell className="text-gray-400 fs-4" /></span>

              <Gear className="text-gray-400 fs-4" />
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
            <div className="d-flex justify-content-between align-content-center mb-2">
              <div>
                <h2 className="card-title fw-bold">Recent Student</h2>
                <span className="text-gray-400">You have <span className="fw-medium">{456}</span> students</span>
              </div>
              <span className="plus-icon rounded-circle position-relative bg-primary text-light btn" role="button"><Plus className="fs-3 position-absolute top-50 start-50 translate-middle" /></span>

            </div>
            {contacts.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between py-3"
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://i.pravatar.cc/150?img=2"
                    alt="profile picture"
                    className="rounded-circle profile-picture"
                  />

                  <div className="ms-3">
                    <h6 className="mb-0 fw-semibold">{item.name}</h6>
                    <small className="text-secondary">{item.className}</small>
                  </div>
                </div>

                <span
                  className="d-flex plus-icon rounded-circle btn btn-outline-primary align-items-center justify-content-center"
                >
                  <Envelope className="fs-3" />
                </span>

              </div>
            ))}
            <button className="mt-2 mb-2 btn bg-purple-10 text-primary w-100 rounded-pill">View More</button>
            <h2 className="fw-bold card-title mb-3 mt-2">Current Foods Menu</h2>

            {foods.map((item) => (
              <div key={item.id} className="mb-3">
                <img
                  src={"https://www.vecteezy.com/free-photos/image"}
                  alt={item.title}
                  className="w-100 rounded-4 object-fit-cover bg-purple-10"
                  style={{
                    height: "110px",
                  }}
                />

                <h3 className="fs-5 mt-2 mb-1">
                  {item.title}
                </h3>

                <small
                  className="text-gray-400"
                >
                  {item.description}
                </small>
              </div>
            ))}

            <button
              className="mt-2 mb-2 btn bg-purple-10 text-primary w-100 rounded-pill">
              View More
            </button>
          </div>
          <div>

          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardContent;
