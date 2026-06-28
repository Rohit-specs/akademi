"use client"
import { Table } from "react-bootstrap"
import Pagination from "/component/Pagination"
import { useState } from "react"

const SchoolExpense = () => {
    const SchoolExpenseData = [
        {
            "id": "#1245679",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Complete",
            "icon": "trending-up"
        },
        {
            "id": "#1235679",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Pending",
            "icon": "trending-up"
        },
        {
            "id": "#1234589",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Canceled",
            "icon": "trending-up"
        },
        {
            "id": "#1256789",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Complete",
            "icon": "trending-up"
        },
        {
            "id": "#1247679",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Complete",
            "icon": "trending-up"
        },
        {
            "id": "#1235675",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Pending",
            "icon": "trending-up"
        },
        {
            "id": "#1277589",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Canceled",
            "icon": "trending-up"
        },
        {
            "id": "#1256389",
            "date": "2021-03-02T13:45:00",
            "amount": 50036,
            "currency": "USD",
            "status": "Complete",
            "icon": "trending-up"
        },
    ]
    const itemPerPage = 5
    const [onPage, setOnPage] = useState(1)
    const startIndex = (onPage - 1) * itemPerPage
    const totalPages = Math.ceil(SchoolExpenseData.length / itemPerPage)
    const endIndex = startIndex + itemPerPage
    const currentPage = SchoolExpenseData.slice(startIndex, endIndex)
    return (
        <><Table responsive variant='light' borderless className="align-middle payment-table mb-0">

            <tbody>
                {currentPage.map((payment) => (
                    <tr key={payment.id}>
                        <td>
                            <div className='d-flex align-items-center gap-3'>
                                <span className='rounded-circle payment-icon bg-danger d-flex justify-content-center align-items-center'>
                                    <img
                                        width={28}
                                        src={"/icons/graph-up-arrow.svg"}
                                        alt=""
                                    />
                                </span>
                                <div><span className='fs-5 fw-medium'>
                                    {payment.id}
                                  
                                </span>
                                <small className="text-gray-400 d-block">{payment.date}</small></div>
                                
                            </div>
                        </td>

                        <td className='fs-5 fw-medium'>
                            {/* {payment.currency} */}$ {payment.amount}
                        </td>

                        <td
                            className={`fs-5 fw-medium ${payment.status.toLowerCase() === "complete"
                                ? "text-success"
                                : payment.status.toLowerCase() === "pending"
                                    ? "text-gray-400"
                                    : "text-danger"
                                }`}
                        >
                            {payment.status}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

            <Pagination
                currentPage={onPage}
                endIndex={endIndex}
                onPageChange={setOnPage}
                startIndex={startIndex}
                totalItems={SchoolExpenseData.length}
                totalPages={totalPages}
            /></>
    )
}

export default SchoolExpense
