import React from 'react'
import { Quote } from 'react-bootstrap-icons'

const StudentsComments = ({studentComments}) => {
    return (
        <>
            <h2 className="card-title mb-2 mb-lg-3">Student Comments</h2>
            {studentComments.map((comment) => (
                <div className='bg-light p-lg-4 rounded-4 p-3 mb-3'>
                    <Quote className="text-warning" size={24} />
                    <small className='mb-2 mb-lg-3 text-dark d-block'>{comment.comment}</small>
                    <div className="d-flex gap-2">
                        <span className="flex-shrink-0 user-picture rounded-circle bg-gray-300 overflow-hidden">
                            <img src={comment.avatar} />
                        </span>
                        <div>
                            <p className="text-dark mb-1">{comment.name}</p>
                            <small>{comment.time}</small>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default StudentsComments
