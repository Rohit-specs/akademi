"use client"
import { Badge, Col, Form, Row } from "react-bootstrap"
import { ArrowUpRight, BarChartFill, Search, StarFill } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import ProgressCircle from "/component/ProgressCircle"
import HeaderIcons from "/component/HeaderIcons"
import StudentsComments from "./StudentsComments"
import { useSelector } from "react-redux"

const FoodDetailsContent = ({ id }) => {
    const { foods } = useSelector((state) => state.food)
    const food = foods.find(
        (food) => food.id === Number(id)
    )
    return (
        <div className="m-lg-4 m-3">
            <header>
                <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                    <h1 className="logo">Food Details</h1>
                    <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">

                        {/* <div className="search-box position-relative d-none d-xl-inline-block">
                            <Search
                                size={16}
                                className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                            />
                            <Form.Control
                                type="text"
                                className="bg-white border-0 form-control ps-5 rounded-pill"
                                placeholder="Search here..."
                            />

                        </div> */}
                        <HeaderIcons />
                    </div>

                    <DashboardDrawer > <StudentsComments studentComments={food.comments} /> </DashboardDrawer></div>

            </header>
            <main>
                <div className='d-flex gap-xl-4 gap-3'>
                    <div className='flex-grow-1'>
                        <div className='bg-light p-4 rounded-4 pb-lg-5'>
                            <div className="d-flex flex-column flex-lg-row gap-3 gap-4">
                                <div className="flex-shrink-0"><span className="rounded-4 bg-purple-10 food-details-image overflow-hidden">
                                    <img className="rounded-4 food-details-image" src={food.image} width={"120px"} />
                                </span></div>

                                <div>
                                    <h2 className="card-title mb-2 mb-xl-3">{food.name}</h2>
                                    <Badge className="rounded-pill px-3 py-2 mt-1 mt-xl-2 mb-xl-3 mb-2">{food.category.toUpperCase()}</Badge>
                                    <p className="text-gray-400 food-description">{food.description}</p>

                                </div>
                            </div>
                            <Row className="mt-2 mt-xl-3 gy-3">
                                <Col xs={6} md={4} lg={3} xl={2}>
                                    <p className="text-gray-400 m-0">Rating</p>
                                    <div className="icon-link">
                                        <StarFill className="text-warning" />
                                        <span className="fs-5 text-dark fw-bold">{food.rating}</span>
                                    </div>
                                </Col>
                                <Col xs={6} md={4} lg={3} xl={2}>
                                    <div className="d-flex align-items-center gap-2"><BarChartFill size={32} className="text-primary fw-bolder" />
                                        <div className="flex-column">
                                            <p className="fs-5 m-0 text-dark fw-bold">{food.totalOrders}</p>
                                            <span className="text-gray-400">Total Order</span>
                                        </div></div>

                                </Col>
                                <Col xs={6} md={4} lg={3} xl={2}>
                                    <div className="d-flex align-items-center gap-2"><ArrowUpRight size={32} className="text-primary fw-bolder" />
                                        <div className="flex-column">
                                            <p className="fs-5 m-0 text-dark fw-bold">{food.interest}</p>
                                            <span className="text-gray-400">Interest</span>
                                        </div></div>

                                </Col>
                                <Col xs={6} md={4} lg={3} xl={2}>
                                    <ProgressCircle value={food.progress} /></Col>
                            </Row>
                            <Row className="mt-2 mt-lg-3 gy-2">
                                <Col xs={12} lg={6}>
                                    <h3 className="card-title mb-2 mb-xl-3">
                                        Ingredients
                                    </h3>
                                    <ul className="text-gray-400">
                                        {food.ingredients.map((ingredient) => (
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
                                        <li>calories: {food.nutrition.calories}</li>
                                        <li>water: {food.nutrition.water}</li>
                                        <li>protein: {food.nutrition.protein}</li>
                                        <li>carbs: {food.nutrition.carbs}</li>
                                        <li>sugar: {food.nutrition.sugar}</li>
                                        <li>fiber: {food.nutrition.fiber}</li>
                                        <li>fat: {food.nutrition.fat}</li>
                                    </ul>

                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='d-none d-xxl-block'>
                        <StudentsComments studentComments={food.comments} />
                    </div>

                </div>



            </main>

        </div>
    )
}

export default FoodDetailsContent
