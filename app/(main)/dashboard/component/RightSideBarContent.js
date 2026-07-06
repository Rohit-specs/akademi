import React from 'react'
import { Envelope, Plus } from 'react-bootstrap-icons'
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
const RightSideBarContent = () => {
  return (<>
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
                <button className="mt-2 mb-2 btn bg-purple-10 text-primary fw-medium w-100 rounded-pill">View More</button>
                <h2 className="fw-bold card-title mb-3 mt-2">Current Foods Menu</h2>
    
                {foods.map((item) => (
                  <div key={item.id} className="mb-3">
                    <img
                      src={"https://i.pravatar.cc/150?img=2"}
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
                  className="mt-2 mb-2 btn bg-purple-10 text-primary fw-medium w-100 rounded-pill">
                  View More
                </button></>
  )
}

export default RightSideBarContent