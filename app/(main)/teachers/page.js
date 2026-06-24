import TeachersContent from "./component/TeachersContent"
export const meta = {
  title: "Teachers ",
  description:
    "Manage teacher profiles, departments, subjects, contact information, and faculty records in the Akademi School Dashboard.",
  keywords: [
    "teachers",
    "faculty management",
    "school staff",
    "teacher records",
    "education dashboard",
    "school administration",
    "Akademi",
  ],

}
const page = () => {
  return (
    <TeachersContent/>
  )
}

export default page