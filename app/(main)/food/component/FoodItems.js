"use client"
import { Badge, Col, Dropdown, Nav, Row, Tab, Table } from "react-bootstrap"
import { useState } from "react"
import { ArrowUpRight, BarChartFill, StarFill, ThreeDots } from "react-bootstrap-icons"
import Pagination from "/component/Pagination"
import ProgressCircle from "/component/ProgressCircle"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { removeFood } from "/store/slices/FoodSlice"
import { addActivity } from "/store/slices/ActivitySlice"
import { format } from "date-fns"
import useDebounce from "/hooks/useDebounce"

const FoodItems = ({ value }) => {
    const [activeTab, setActiveTab] = useState("all")
    const { categories, foods } = useSelector((state) => state.food)
    const debouncedSearch = useDebounce(value, 500)

    const foodCategoryItems = (
        activeTab === "all"
            ? foods
            : foods.filter((item) => item.category === activeTab)
    ).filter((food) =>
        food.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        food.category.toLowerCase().includes(debouncedSearch.toLowerCase())
    )

    const itemPerPage = 5
    const totalPages = Math.ceil(foodCategoryItems.length / itemPerPage)
    const [onPage, setOnPage] = useState(1)
    const startIndex = (onPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const currentFoods = foodCategoryItems.slice(startIndex, endIndex)

    const manageCategory = (category) => {
        let newCategory;
        if (category !== "all") {
            newCategory = foods.filter((item) => item.category === category)
        }
        else {
            newCategory = foods
        }
        setOnPage(1)
    }

    const dispatch = useDispatch()
    const router = useRouter()
    return (<>

        <div className="d-inline-flex d-lg-flex flex-column flex-lg-row justify-content-between mb-3 mb-lg-4">
            <h2 className="page-title fw-medium">Food Menu</h2>
            <Nav className="d-flex gap-1 gap-lg-2 flex-nowrap custom-border-bottom">
                {categories.map((item) => (
                    <Nav.Item key={item.id} className={`${activeTab === item.id ? "border-primary custom-border-bottom" : ""}`}>
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

            <tbody>
                {currentFoods.length === 0 ?
                    <tr>
                        <td colSpan={6} className="text-center py-5 text-gray-400">
                            No Result Found
                        </td>
                    </tr>
                    : (currentFoods.map((food) => (
                        <tr key={food.id} className="gap-2">
                            <td>
                                <div className="d-flex align-items-center gap-3 flex-nowrap">
                                    <span className="food-image bg-purple-10 rounded-4"> <img className="food-image rounded-4"
                                        src={food.image}
                                    /></span>


                                    <div className="flex-grow-1 overflow-hidden">
                                        <Badge
                                            bg="primary"
                                            className="px-2 py-1 px-lg-3 py-lg-2  rounded-pill mb-1"
                                        >
                                            {food.category}
                                        </Badge>

                                        <h6 className="mb-0 text-truncate">
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
                                        <span className="text-gray-400 d-none d-xl-block">Total Order</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <ArrowUpRight size={30} className="text-primary fw-bold" />

                                    <div>
                                        <p className="fs-4 fw-medium p-0 m-0 text-dark"> {food.interest}%</p>
                                        <span className="text-gray-400 d-none d-xl-block">Interest</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <ProgressCircle value={food.progress} />
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
                                        <Dropdown.Item onClick={() => router.push("food/" + food.id)}>
                                            View
                                        </Dropdown.Item>

                                        {/* <Dropdown.Item>
                                        Edit
                                    </Dropdown.Item> */}
                                        <Dropdown.Divider />

                                        <Dropdown.Item className="text-danger" onClick={() => {
                                            dispatch(removeFood(food.id))
                                            dispatch(
                                                addActivity({
                                                    type: "food",
                                                    user: "Admin",
                                                    action: "removed food item",
                                                    target: food.name,
                                                    color: "danger",
                                                    date: format(new Date(), "yyyy-MM-dd"),
                                                    time: format(new Date(), "hh:mm a"),
                                                })
                                            )
                                            toast.success("Food Removed Sucessfully")
                                        }}>
                                            Delete
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    )))}
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