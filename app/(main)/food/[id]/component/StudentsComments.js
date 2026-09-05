import { Quote } from 'react-bootstrap-icons'

const StudentsComments = ({studentComments}) => {
    return (
        <>
            <h2 className="card-title mb-2 mb-lg-3">Student Comments</h2>
            {studentComments.map((comment,index) => (
                <div className='bg-light p-lg-4 rounded-4 p-3 mb-3 px-lg-5' key={index}>
                    <Quote className="text-warning" size={24} />
                    <small className='mb-2 mb-lg-3 text-dark d-block'>{comment.comment}</small>
                    <div className="d-flex gap-5">
                        <span className="flex-shrink-0 user-picture rounded-circle bg-gray-300 overflow-hidden">
                            <img src={comment.image} width={"100%"} />
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
