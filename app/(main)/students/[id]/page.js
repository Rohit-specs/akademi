import StudentDetails from "./component/StudentDetailContent"

export const metadata = {
  title: "Student Detail",
  description:
    "View student profile, parent information, payment history, enrolled classes, and academic schedule.",
}
const StudentsDetailsPage = async ({params}) => {
  const {id} = await params
  return (
    <StudentDetails/>
  )
}
export default StudentsDetailsPage