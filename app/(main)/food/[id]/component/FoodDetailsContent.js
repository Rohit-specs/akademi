import { Badge, Col, Form, Row } from "react-bootstrap"
import { ArrowUpRight, BarChartFill, Bell, Gear, Quote, Search, StarFill } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import ProgressCircle from "/component/ProgressCircle"
import HeaderIcons from "/component/HeaderIcons"

const FoodDetailsContent = () => {
    const FoodDetailsData = {
        "food": {
            "id": 1,
            "title": "Beef Steak with Fried Potato",
            "category": "Lunch",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "https://via.placeholder.com/180x120",
            "rating": 4.9,
            "totalOrders": 1456,
            "interest": "26%",
            "completion": "95%"
        },
        "ingredients": [
            "2 tablespoons butter, softened, divided",
            "1 teaspoon minced fresh parsley",
            "1/2 teaspoon minced garlic",
            "1/4 teaspoon reduced-sodium soy sauce",
            "1 beef flat iron steak or boneless top sirloin steak (3/4 pound)",
            "1/8 teaspoon salt",
            "1/8 teaspoon pepper"
        ],
        "nutrition": {
            "calories": 317,
            "water": "61%",
            "protein": "26 grams",
            "carbs": "0 grams",
            "sugar": "0 grams",
            "fiber": "0 grams",
            "fat": "18 grams"
        },
        "studentComments": [
            {
                "id": 1,
                "name": "Samantha W.",
                "avatar": "https://via.placeholder.com/40",
                "comment": "Well designed, force compliance, process people include minimize human loss.",
                "time": "5 days ago"
            },
            {
                "id": 2,
                "name": "Karen Hope",
                "avatar": "https://via.placeholder.com/40",
                "comment": "Well designed, force compliance, process people include minimize human loss.",
                "time": "5 days ago"
            },
            {
                "id": 3,
                "name": "Tony Soap",
                "avatar": "https://via.placeholder.com/40",
                "comment": "Well designed, force compliance, process people include minimize human loss.",
                "time": "5 days ago"
            }
        ]
    }
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Food Details</h1>
                    <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">

                        <div className="search-box position-relative d-none d-xl-inline-block">
                            <Search
                                size={16}
                                className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                            />
                            <Form.Control
                                type="text"
                                className="bg-white border-0 form-control ps-5 rounded-pill"
                                placeholder="Search here..."
                            />

                        </div>
                        <HeaderIcons/>
                    </div>

                    <DashboardDrawer /></div>

            </header>
            <main>
                <div className='d-flex gap-xl-4 gap-3'>
                    <div className='flex-grow-1'>
                        <div className='bg-light p-4 rounded-4 pb-lg-5'>
                            <div className="d-flex flex-column flex-lg-row gap-3 gap-4">
                                <div className="flex-shrink-0"><span className="rounded-4 bg-purple-10 food-details-image overflow-hidden">
                                    <img className="rounded-4 food-details-image" src={"https://i.pravatar.cc/150?img=2"} />
                                </span></div>

                                <div>
                                    <h2 className="card-title mb-2 mb-xl-3">Beef Steak with Fried Potato</h2>
                                    <Badge className="rounded-pill px-3 py-2 mt-1 mt-xl-2 mb-xl-3 mb-2">Breakfast</Badge>
                                    <p className="text-gray-400 food-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                </div>
                            </div>
                            <Row className="mt-2 mt-xl-3 gy-3">
                                <Col xs={6} md={4} lg={3} xl={2}>
                                    <p className="text-gray-400 m-0">Rating</p>
                                    <div className="icon-link">
                                        <StarFill className="text-warning" />
                                        <span className="fs-5 text-dark fw-bold">4.9</span>
                                    </div>
                                </Col>
                                <Col xs={6} md={4} lg={3} xl={2}>
                                    <div className="d-flex align-items-center gap-2"><BarChartFill size={32} className="text-primary fw-bolder" />
                                        <div className="flex-column">
                                            <p className="fs-5 m-0 text-dark fw-bold">1.456</p>
                                            <span className="text-gray-400">Total Order</span>
                                        </div></div>

                                </Col>
                                <Col xs={6} md={4} lg={3} xl={2}>
                                    <div className="d-flex align-items-center gap-2"><ArrowUpRight size={32} className="text-primary fw-bolder" />
                                        <div className="flex-column">
                                            <p className="fs-5 m-0 text-dark fw-bold">26%</p>
                                            <span className="text-gray-400">Interest</span>
                                        </div></div>

                                </Col>
                                <Col xs={6} md={4} lg={3} xl={2}>
                                    <ProgressCircle value={55} /></Col>
                            </Row>
                            <Row className="mt-2 mt-lg-3 gy-2">
                                <Col xs={12} lg={6}>
                                    <h3 className="card-title mb-2 mb-xl-3">
                                        Ingredients
                                    </h3>
                                    <ul className="text-gray-400">
                                        {FoodDetailsData.ingredients.map((ingredient) => (
                                            <li key={ingredient}>
                                                {ingredient}
                                            </li>
                                        ))}


                                    </ul>

                                </Col>
                                <Col xs={12} lg={6}>
                                    <h3 className="card-title mb-2 mb-xl-3">
                                        Nutrition
                                    </h3>
                                    <ul className="text-gray-400">
                                        <li>calories: {FoodDetailsData.nutrition.calories}</li>
                                        <li>water: {FoodDetailsData.nutrition.water}</li>
                                        <li>protein: {FoodDetailsData.nutrition.protein}</li>
                                        <li>carbs: {FoodDetailsData.nutrition.carbs}</li>
                                        <li>sugar: {FoodDetailsData.nutrition.sugar}</li>
                                        <li>fiber: {FoodDetailsData.nutrition.fiber}</li>
                                        <li>fat: {FoodDetailsData.nutrition.fat}</li>
                                    </ul>

                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='d-none d-xxl-block'>
                        <h2 className="card-title mb-2 mb-lg-3">Student Comments</h2>
                        {FoodDetailsData.studentComments.map((comment) => (
                            <div className='bg-light p-lg-4 rounded-4 p-3 mb-3'>
                                <Quote className="text-warning" size={24} />
                                <small className='mb-2 mb-lg-3 text-dark d-block'>{comment.comment}</small>
                                <div className="d-flex gap-2">
                                    <span className="flex-shrink-0 user-picture rounded-circle bg-gray-300 overflow-hidden">
                                        <img src={comment.avatar}/>
                                    </span>
                                    <div>
                                        <p className="text-dark mb-1">{comment.name}</p>
                                        <small>{comment.time}</small>
                                    </div>

                                </div>
                            </div>
                        ))}




                    </div>

                </div>



            </main>

        </div>
    )
}

export default FoodDetailsContent
