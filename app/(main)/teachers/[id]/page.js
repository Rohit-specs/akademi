import TeacherDetailsContent from "./component/TeacherDetailsContent"
export const metadata = {
  title: "Teacher Detail",
  description:
    "View teacher profile, education, expertise, contact information, qualifications, and teaching schedule.",
}
const TechersDetailsPage = async ({params}) => {
    const {id} = await params
    return (
       <TeacherDetailsContent id={id}/>
    )
}
export default TechersDetailsPage
