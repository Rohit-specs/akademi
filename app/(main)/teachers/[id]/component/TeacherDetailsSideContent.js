import React from 'react'
import { Calendar3, Clock } from 'react-bootstrap-icons'

const TeacherDetailsSideContent = () => {
  return (
    <>
    <div className='bg-light p-lg-4 rounded-4 p-3 mb-3'>
                            <h3 className='mb-2'>Schedule Details</h3>
                            <small className='text-gray-400'>Thursday, 10th April , 2021</small>
                        </div>
                        <div className='bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 schedule-card-primary'>

                            <div className="card-content">
                                <div className="card-info">
                                    <h5 className="title">World History</h5>
                                    <p className="category text-gray-400 mb-3">Class VII-B</p>
                                    <div className='d-flex align-items-center gap-5'>
                                        <div className="schedule">
                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Calendar3 className="calendar-icon text-info" />
                                                <span>March 20, 2021</span>
                                            </div>

                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Clock className="clock-icon text-warning" />
                                                <span>09:00 - 10:00 AM</span>
                                            </div>
                                        </div>
                                        <div className='user-picture rounded-circle bg-purple-10'>
                                            <img className='user-picture rounded-circle' src={"https://i.pravatar.cc/150?img=2"} />
                                        </div>
                                    </div>
                                </div>

                                <div className="avatar-circle" />
                            </div>

                        </div>
                        <div className='bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 schedule-card-info'>

                            <div className="card-content">
                                <div className="card-info">
                                    <h5 className="title">Ancient History</h5>
                                    <p className="category text-gray-400 mb-3">Class VII-A</p>
                                    <div className='d-flex align-items-center gap-5'>
                                        <div className="schedule">
                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Calendar3 className="calendar-icon text-info" />
                                                <span>March 20, 2021</span>
                                            </div>

                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Clock className="clock-icon text-warning" />
                                                <span>09:00 - 10:00 AM</span>
                                            </div>
                                        </div>
                                        <div className='user-picture rounded-circle bg-purple-10'>
                                            <img className='user-picture rounded-circle' src={"https://i.pravatar.cc/150?img=2"} />
                                        </div>
                                    </div>
                                </div>

                                <div className="avatar-circle" />
                            </div>

                        </div>
                        <div className='bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 schedule-card-warning'>

                            <div className="card-content">
                                <div className="card-info">
                                    <h5 className="title">Culture</h5>
                                    <p className="category text-gray-400 mb-3">Class VII-A</p>
                                    <div className='d-flex align-items-center gap-5'>
                                        <div className="schedule">
                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Calendar3 className="calendar-icon text-info" />
                                                <span>March 20, 2021</span>
                                            </div>

                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Clock className="clock-icon text-warning" />
                                                <span>09:00 - 10:00 AM</span>
                                            </div>
                                        </div>
                                        <div className='user-picture rounded-circle bg-purple-10'>
                                            <img className='user-picture rounded-circle' src={"https://i.pravatar.cc/150?img=2"} />
                                        </div>
                                    </div>
                                </div>

                                <div className="avatar-circle" />
                            </div>

                        </div>
                        <div className='bg-light py-lg-4 rounded-4 py-3 px-4 px-lg-5 mb-3 schedule-card-text'>

                            <div className="card-content">
                                <div className="card-info">
                                    <h5 className="title">World History</h5>
                                    <p className="category text-gray-400 mb-3">Class VII-A</p>
                                    <div className='d-flex align-items-center gap-5'>
                                        <div className="schedule">
                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Calendar3 className="calendar-icon text-info" />
                                                <span>March 20, 2021</span>
                                            </div>

                                            <div className="schedule-item d-flex align-items-center gap-2">
                                                <Clock className="clock-icon text-warning" />
                                                <span>09:00 - 10:00 AM</span>
                                            </div>
                                        </div>
                                        <div className='user-picture rounded-circle bg-purple-10'>
                                            <img className='user-picture rounded-circle' src={"https://i.pravatar.cc/150?img=2"} />
                                        </div>
                                    </div>
                                </div>

                                <div className="avatar-circle" />
                            </div>

                        </div>
                        <button
                            className="mt-2 mb-2 btn bg-purple-10 text-primary fw-medium w-100 rounded-pill fw-medium">
                            View More
                        </button></>
  )
}

export default TeacherDetailsSideContent