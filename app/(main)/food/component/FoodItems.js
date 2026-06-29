"use client"
import { Badge, Col, Dropdown, Nav, Row, Tab, Table } from "react-bootstrap"
import { FoodData } from "/data/food/FoodData"
import { useState } from "react"
import { ArrowUpRight, BarChartFill, StarFill, ThreeDots } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"

const FoodItems = () => {
    const [activeTab, setActiveTab] = useState("all");
    const categories = FoodData.categories
    const menuItems = FoodData.menuItems
    const [foodCategoryItems, setFoodCategoryItems] = useState(menuItems)
    const manageCategory = (category) => {
        let newCategory;
        if (category !== "all") {
            newCategory = menuItems.filter((item) => item.category === category)
        }
        else {
            newCategory = menuItems
        }
        setFoodCategoryItems(newCategory)
    }
    const itemPerPage = 5;
    const totalPages = Math.ceil(foodCategoryItems.length / itemPerPage);
    const [onPage, setOnPage] = useState(1);
    const startIndex = (onPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentFoods = foodCategoryItems.slice(startIndex, endIndex);
    return (<>

        {/* {JSON.stringify(menuItems, null, 4)} */}

        <div className="d-flex justify-content-between mb-3 mb-lg-4">
            <h2 className="page-title fw-medium">Food Menu</h2>
            <Nav className="d-flex gap-1 gap-lg-2 flex-nowrap custom-border-bottom">
                {categories.map((item) => (
                    <Nav.Item key={item.id} className={`${activeTab === item.id?"border-primary custom-border-bottom":""}`}>
                        <Nav.Link
                            active={activeTab === item.id}
                            onClick={() => {
                                setActiveTab(item.id)
                                manageCategory(item.id)
                            }}
                            className={`${activeTab === item.id ? "text-primary fw-semibold" : "text-gray-400 "
                                }`}
                        >
                            {item.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </div>
        <Table responsive className="food-table align-middle">
            <thead>
                <tr>
                    <th>Food</th>
                    <th>Rating</th>
                    <th>Total Orders</th>
                    <th>Interest</th>
                    <th>Progress</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {currentFoods.map((food) => (
                    <tr key={food.id}>
                        <td>
                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    width={60}
                                    height={60}
                                    className="rounded"
                                />

                                <div>
                                    <Badge bg="primary" className="mb-2">
                                        {food.category}
                                    </Badge>

                                    <h6 className="mb-0 fw-semibold">
                                        {food.name}
                                    </h6>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className="d-flex align-items-center gap-2">
                                <StarFill className="text-warning" />
                                <span>{food.rating}</span>
                            </div>
                        </td>

                        <td>
                            <div className="d-flex align-items-center gap-2">
                                <BarChartFill className="text-primary" />
                                {food.totalOrders}
                            </div>
                        </td>

                        <td>
                            <div className="d-flex align-items-center gap-2">
                                <ArrowUpRight className="text-primary" />
                                {food.interest}%
                            </div>
                        </td>

                        <td>
                            <div
                                className="progress"
                                style={{ width: 80, height: 8 }}
                            >
                                <div
                                    className="progress-bar"
                                    style={{
                                        width: `${food.progress}%`,
                                    }}
                                ></div>
                            </div>
                        </td>

                        <td>
                            <Dropdown align="end">
                                <Dropdown.Toggle
                                    as="div"
                                    bsPrefix=" "
                                    className="action-menu"
                                >
                                    <ThreeDots />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        View
                                    </Dropdown.Item>

                                    <Dropdown.Item>
                                        Edit
                                    </Dropdown.Item>

                                    <Dropdown.Item>
                                        Delete
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

        <Pagination
            currentPage={onPage}
            endIndex={endIndex}
            startIndex={startIndex}
            onPageChange={setOnPage}
            totalPages={totalPages}
            totalItems={foodCategoryItems.length}
        />






    </>
    )
}

export default FoodItems