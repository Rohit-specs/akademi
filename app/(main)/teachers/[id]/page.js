export const metadata = {
  title: "Teacher Details",
  description:
  "View teacher profiles, qualifications, subjects, contact details, and assigned classes.",
  keywords: [
    "Academy",
    "Teacher Details",
    "Teacher Profile",
    "Faculty Information",
    "Education",
    "School Management",
  ],
}
import TeacherDetailsContent from "./component/TeacherDetailsContent"
const TechersDetailsPage = async ({ params }) => {
  const { id } = await params
  return (
    <TeacherDetailsContent id={id} />
  )
}
export default TechersDetailsPage
