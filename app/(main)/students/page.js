import StudentContent from "./component/StudentContent"
export const metadata = {
  title: "Students",
  description:
    "Manage student records, admissions, profiles, grades, attendance, and student information from the Academy School Admission Dashboard.",
  keywords: [
    "students",
    "school dashboard",
    "student management",
    "school admission",
    "education CRM",
    "student records",
    "Academy",
  ],
}
const StudentsPage = () => {
  return (
    <StudentContent/>
  )
}

export default StudentsPage
