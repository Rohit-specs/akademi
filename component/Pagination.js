"use client";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    startIndex,
    endIndex,
    totalItems,
}) {
    return (
        <div className="d-flex justify-content-between align-items-center mt-4">
            <small className="text-gray-400">
                Showing {startIndex + 1}-
                {Math.min(endIndex, totalItems)} from {totalItems} data
            </small>

            <div className="d-flex align-items-center gap-2">
                <button
                    className="btn btn-sm border-0"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    <ChevronLeft />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => onPageChange(index + 1)}
                        className={`dashboard-pagination-btn btn btn-sm rounded-circle ${currentPage === index + 1
                            ? "btn-primary"
                            : "btn-outline-secondary"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    className="btn btn-sm border-0 "
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}

export default Pagination;