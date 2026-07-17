"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
import { Envelope, Plus } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux';
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
// const foods = [
//   {
//     id: 1,
//     title: "Beef Steak with Fried Potato",
//     description: "Lorem ipsum dolor sit amet",
//     image: "https://picsum.photos/300/180?1",
//   },
//   {
//     id: 2,
//     title: "Pancake with Honey",
//     description: "Lorem ipsum dolor sit amet",
//     image: "https://picsum.photos/300/180?2",
//   },
//   {
//     id: 3,
//     title: "Japanese Beef Ramen",
//     description: "Lorem ipsum dolor sit amet",
//     image: "https://picsum.photos/300/180?3",
//   },
// ];

const RightSideBarContent = () => {
  const { students } = useSelector((state) => state.student)
  const recentStudents = [...students].sort((a, b) => b.id - a.id).slice(0, 5)
  const { foods } = useSelector((state) => state.food)
  const currentFoods = foods.slice(10, 13)
  const router = useRouter()

  return (
    <>
      <div className="d-flex justify-content-between align-content-center mb-2">
        <div>
          <h2 className="card-title fw-bold">Recent Student</h2>
          <span className="text-gray-400">You have <span className="fw-medium">{students.length}</span> students</span>
        </div>
        <Button as={Link} href='students/add-new-student' className="plus-icon rounded-circle position-relative" ><Plus className="fs-3 position-absolute top-50 start-50 translate-middle" /></Button>

      </div>
      {recentStudents.map((student) => (
        <div
          key={student.id}
          className="d-flex align-items-center justify-content-between py-3"
          role="button"
          onClick={() => router.push(`/students/${student.id}`)}
        >
          <div className="d-flex align-items-center">
            <img
              src={student.photo}
              alt={`${student.firstName} ${student.lastName}`}
              className="rounded-circle profile-picture"
            />

            <div className="ms-3">
              <h6 className="mb-0 fw-semibold">
                {student.firstName} {student.lastName}
              </h6>

              <small className="text-secondary">
                {student.grade}
              </small>
            </div>
          </div>

          <Link
            href={`mailto:${student.email}`}
            className="d-flex plus-icon rounded-circle btn btn-outline-primary align-items-center justify-content-center"

          >
            <Envelope className="fs-3" />
          </Link>
        </div>
      ))}
      <Button as={Link} href='/students' variant='outline-primary'

        className="mt-2 mb-2 bg-purple-10 fw-medium w-100 rounded-pill">View More</Button>
      <h2 className="fw-bold card-title mb-3 mt-2">Current Foods Menu</h2>

      {currentFoods.map((item) => (
        <div key={item.id} className="mb-3">
          <img
            src={item.image}
            onClick={() => router.push("food/" + item.id)}
            role='navigation'
            alt={item.name}
            className="rounded-4 object-fit-cover food-image bg-purple-10 "

          />

          <h3 className="fs-5 mt-2 mb-1">
            {item.name}
          </h3>

          <small
            className="text-gray-400"
          >
            {item.description}
          </small>
        </div>
      ))}

      <Button
        as={Link}
        href='/food'
        variant='outline-primary'
        className="mt-2 mb-2 bg-purple-10 fw-medium w-100 rounded-pill">
        View More
      </Button>
    </>
  )
}

export default RightSideBarContent