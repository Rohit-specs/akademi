"use client"
import { Badge, Col, Dropdown, Nav, Row, Tab, Table } from "react-bootstrap"
import { FoodData } from "/data/food/FoodData"
import { useState } from "react"
import { ArrowUpRight, BarChartFill, StarFill, ThreeDots } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"
import ProgressCircle from "/component/ProgressCircle"
import { useRouter } from "next/navigation"

const FoodItems = () => {
    const [activeTab, setActiveTab] = useState("all");
    const categories = FoodData.categories
    const menuItems = FoodData.menuItems
    const [foodCategoryItems, setFoodCategoryItems] = useState(menuItems) 

    const itemPerPage = 5;
    const totalPages = Math.ceil(foodCategoryItems.length / itemPerPage);
    const [onPage, setOnPage] = useState(1);
    const startIndex = (onPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentFoods = foodCategoryItems.slice(startIndex, endIndex);

    const manageCategory = (category) => {
        let newCategory;
        if (category !== "all") {
            newCategory = menuItems.filter((item) => item.category === category)
        }
        else {
            newCategory = menuItems
        }
        setOnPage(1)
        setFoodCategoryItems(newCategory)
    }
    const router = useRouter()
    return (<>

        {/* {JSON.stringify(menuItems, null, 4)} */}

        <div className="d-inline-flex d-lg-flex flex-column flex-lg-row justify-content-between mb-3 mb-lg-4">
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
        <Table responsive borderless className="food-table align-middle">
            {/* <thead>
                <tr>
                    <th>Food</th>
                    <th>Rating</th>
                    <th>Total Orders</th>
                    <th>Interest</th>
                    <th>Progress</th>
                    <th></th>
                </tr>
            </thead> */}

            <tbody>
                {currentFoods.map((food) => (
                    <tr key={food.id} className="gap-2">
                        <td>
                            <div className="d-flex align-items-center gap-3">
                                <span className="food-image bg-purple-10 rounded-4"> <img className="food-image rounded-4"
                                    src={food.image}
                                /></span>
                               

                                <div>
                                    <Badge bg="primary" className="fs-5 px-3 py-2 mb-2 rounded-pill">
                                        {food.category}
                                    </Badge>

                                    <h6 className="mb-0 fs-4 fw-medium text-dark">
                                        {food.name}
                                    </h6>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className="d-flex align-items-center gap-2">
                                <StarFill className="text-warning" />
                                <span className="fs-4 fw-medium p-0 m-0 text-dark">{food.rating}</span>
                            </div>
                        </td>

                        <td>
                            <div className="d-flex align-items-center gap-2">
                                <BarChartFill size={30} className="text-primary" />
                                <div>
                                    <p className="fs-4 fw-medium p-0 m-0 text-dark">{food.totalOrders}</p>
                                    <span className="text-gray-400">Total Order</span>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className="d-flex align-items-center gap-2">
                                <ArrowUpRight size={30} className="text-primary fw-bold" />
                               
                                <div>
                                    <p className="fs-4 fw-medium p-0 m-0 text-dark"> {food.interest}%</p>
                                    <span className="text-gray-400">Interest</span>
                                </div>
                            </div>
                        </td>

                        <td>
                            <ProgressCircle value={food.progress}/>
                        </td>

                        <td>
                            <Dropdown align="end">
                                <Dropdown.Toggle
                                    role="button"
                                    as="span"
                                    bsPrefix=" "
                                    className="action-menu"
                                >
                                    <ThreeDots />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>router.push("food/"+food.id)}>
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