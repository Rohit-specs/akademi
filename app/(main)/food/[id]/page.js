import FoodDetailsContent from './component/FoodDetailsContent'
const FoodDetailPage = async({params}) => {
  const {id} = await params
  return (
    
    <FoodDetailsContent id={id}/>
  )
}

export default FoodDetailPage