export const metadata = {
  title: "Student Details",
  description:
  "View detailed student information including profile, contact details, grades, and academic records.",
  keywords: [
    "Academy",
    "Student Details",
    "Student Profile",
    "Academic Records",
    "School Management",
    "Student Information",
    "Education",
  ],
}
import StudentDetails from "./component/StudentDetailContent"
const StudentsDetailsPage = async ({params}) => {
  const {id} = await params
  return (
    <StudentDetails id={id}/>
  )
}
export default StudentsDetailsPage