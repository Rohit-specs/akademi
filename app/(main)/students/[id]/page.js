import StudentDetails from "./component/StudentDetailContent"


const StudentsDetailsPage = async ({params}) => {
  const {id} = await params
  return (
    <StudentDetails/>
  )
}

export default StudentsDetailsPage