export const metadata = {
  title: "Edit Student",
  description:
  "Update student information including personal details, academic records, contact information, and enrollment data.",
  keywords: [
    "Academy",
    "Edit Student",
    "Update Student",
    "Student Profile",
    "Student Information",
    "Student Management",
    "School Management",
    "Education",
    "School ERP",
  ],
}
import EditStudentForm from './component/EditStudentForm'
const EditPage = async ({params}) => {
    const {id} = await params
  return (
    <EditStudentForm id={id}/>
  )
}

export default EditPage
