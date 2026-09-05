export const metadata = {
  title: "Edit Teacher",
  description:
  "Update teacher information including profile, qualifications, subjects, department, and contact details.",
  keywords: [
    "Academy",
    "Edit Teacher",
    "Update Teacher",
    "Teacher Profile",
    "Teacher Management",
    "Faculty",
    "School Management",
    "Education",
    "School ERP",
  ],
}
import EditTeacherForm from './component/EditTeacherForm'
const EditPage = async ({params}) => {
    const {id} = await params
  return (
    <EditTeacherForm id={id}/>
  )
}

export default EditPage
