import StudentContent from "./component/StudentContent"
export const metadata = {
  title: "Students",
  description:
    "Manage student records, admissions, profiles, grades, attendance, and student information from the Akademi School Admission Dashboard.",
  keywords: [
    "students",
    "school dashboard",
    "student management",
    "school admission",
    "education CRM",
    "student records",
    "Akademi",
  ],
}
const StudentsPage = () => {
  return (
    <StudentContent/>
  )
}

export default StudentsPage
