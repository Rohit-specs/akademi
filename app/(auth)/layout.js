import { Container, Row, Col } from "react-bootstrap";
import { MortarboardFill } from "react-bootstrap-icons";

const AuthLayout = ({ children }) => {
  return (
    <Container fluid className="min-vh-100 bg-gray-100">
      <Row className="min-vh-100">
        <Col
          lg={6}
          className="d-none d-lg-flex flex-column justify-content-center align-items-center bg-primary text-white p-5"
        >
          <MortarboardFill size={70} />

          <h1 className="fw-bold display-5 mt-4">
            Academy
          </h1>

          <p className="text-center w-75 fs-5 mt-3">
            Manage students, teachers, courses, and communication
            from one powerful dashboard.
          </p>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Students"
            className="img-fluid rounded-4 shadow mt-5"
          />
        </Col>


        <Col
          xs={12}
          lg={6}
          className="d-flex justify-content-center align-items-center p-4"
        >
          {children}
        </Col>

      </Row>
    </Container>
  );
};

export default AuthLayout;