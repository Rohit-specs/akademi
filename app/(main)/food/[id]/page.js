export const metadata = {
  title: "Food Details",
  description:
    "View complete information about school meals, ingredients, pricing, and nutritional values.",
  keywords: [
    "Academy",
    "Food Details",
    "Meal Details",
    "Nutrition",
    "Food Information",
    "School Cafeteria",
    "Menu",
    "Education",
  ],
}
import FoodDetailsContent from './component/FoodDetailsContent'
const FoodDetailPage = async({params}) => {
  const {id} = await params
  return (
    
    <FoodDetailsContent id={id}/>
  )
}

export default FoodDetailPage