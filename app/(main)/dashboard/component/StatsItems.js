"use client"
import { Row, Col } from "react-bootstrap";
import { Mortarboard, PersonWorkspace, CupHot, CalendarEventFill, } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const StatsItems = () => {
  const students = useSelector((state) => state.student.students);
  const teachers = useSelector((state) => state.teacher.teachers);
  const events = useSelector((state) => state.event.events);
  const foods = useSelector((state) => state.food.foods);

  const cards = [
    {
      id: 1,
      title: "Students",
      value: students.length,
      icon: Mortarboard,
      bg: "primary",
    },
    {
      id: 2,
      title: "Teachers",
      value: teachers.length,
      icon: PersonWorkspace,
      bg: "info",
    },
    {
      id: 3,
      title: "Events",
      value: events.length,
      icon: CalendarEventFill,
      bg: "warning",
    },
    {
      id: 4,
      title: "Foods",
      value: foods.length,
      icon: CupHot,
      bg: "dark",
    },
  ];

  return (
    <Row className="p-4">
      {cards.map((card) => {
        const Icon = card.icon

        return (
          <Col xs={12} md={6} xl={3} key={card.id} className="d-flex justify-content-center gy-3 gy-md-0">
            <div className="d-flex align-items-center gap-3">
              <span
                className={`stats-icon bg-${card.bg} rounded-circle d-flex align-items-center justify-content-center text-white`}

              >
                <Icon size={26} />
              </span>

              <div>
                <small className="text-gray-400 d-block">
                  {card.title}
                </small>

                <h2 className="logo fw-bold mb-0">
                  {card.value}
                </h2>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default StatsItems;