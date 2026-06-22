"use client"
import { Fragment, useState } from "react";
import {
  Offcanvas,
  Form,
  ListGroup,
  Button
} from "react-bootstrap";
import {
  List,
  Grid,
  People,
  PersonBadge,
  CalendarEvent,
  CurrencyDollar,
  CupHot,
  Person,
  ChatDots
} from "react-bootstrap-icons";

export default function DashboardDrawer() {
  const [show, setShow] = useState(false);
//   const [mobile, setMobile] = useState(window.innerWidth < 576);

//   useEffect(() => {
//     const resizeHandler = () => {
//       setMobile(window.innerWidth < 576);
//     };

//     window.addEventListener("resize", resizeHandler);

//     return () =>
//       window.removeEventListener("resize", resizeHandler);
//   }, []);

  return (
    <>
      <Button
        variant="link"
        className="p-0 border-0 text-dark d-xl-none"
        onClick={() => setShow(true)}
      >
        <List size={28} />
      </Button>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="start"
        className="w-75"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Akademi
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Form.Control
            placeholder="Search here..."
            className="mb-4"
          />


            <div className="d-sm-none">
              <h6 className="text-gray-400 fw-semibold mb-3">
                Navigation
              </h6>

              <ListGroup className="mb-4">
                <ListGroup.Item className="border-0">
                  <Grid className="me-2" />
                  Dashboard
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  <People className="me-2" />
                  Students
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  <PersonBadge className="me-2" />
                  Teachers
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  <CalendarEvent className="me-2" />
                  Events
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  <CurrencyDollar className="me-2" />
                  Finance
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  <CupHot className="me-2" />
                  Food
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  <Person className="me-2" />
                  User
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  <ChatDots className="me-2" />
                  Chat
                </ListGroup.Item>
              </ListGroup>

              <hr />
            </div>
     


          <h6 className="text-gray-400 fw-semibold">
            Recent Students
          </h6>

          <ListGroup className="mb-4">
            <ListGroup.Item className="border-0 px-0">
              Samantha William
            </ListGroup.Item>

            <ListGroup.Item className="border-0 px-0">
              Tony Kemp
            </ListGroup.Item>

            <ListGroup.Item className="border-0 px-0">
              Jordan Neo
            </ListGroup.Item>

            <ListGroup.Item className="border-0 px-0">
              Korina Hope
            </ListGroup.Item>
          </ListGroup>

          <h6 className="text-gray-400 fw-semibold">
            Messages
          </h6>

          <ListGroup className="mb-4">
            <ListGroup.Item className="border-0 px-0">
              Samantha William
              <div className="small text-gray-400">
                Lorem ipsum dolor sit amet...
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="border-0 px-0">
              Tony Kemp
              <div className="small text-gray-400">
                Lorem ipsum dolor sit amet...
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="border-0 px-0">
              Jordan Neo
              <div className="small text-gray-400">
                Lorem ipsum dolor sit amet...
              </div>
            </ListGroup.Item>
          </ListGroup>


          <h6 className="text-gray-400 fw-semibold">
            Current Food Menu
          </h6>

          <div className="bg-light rounded p-3 mb-3">
            Beef Steak with Fried Potato
          </div>

          <div className="bg-light rounded p-3 mb-3">
            Pancake with Honey
          </div>

          <div className="bg-light rounded p-3">
            Japanese Beef Ramen
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}