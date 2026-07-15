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
    const getPageNumbers = () => {
        const pages = [];
        const siblingCount = 2;

        pages.push(1);

        let left = Math.max(currentPage - siblingCount, 2);
        let right = Math.min(currentPage + siblingCount, totalPages - 1);

        if (left > 2) {
            pages.push("left-three-dots");
        }

        for (let i = left; i <= right; i++) {
            pages.push(i);
        }

        if (right < totalPages - 1) {
            pages.push("right-three-dots");
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };
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
                {getPageNumbers().map((page, index) => (
                  
                        page === "left-three-dots" ? (
                        <button
                            key={index} className="btn btn-sm border-0"
                            onClick={() =>
                                onPageChange(Math.max(currentPage - 5, 1))
                            }
                        >
                            ...
                        </button>
                        ) : page === "right-three-dots" ? (
                        <button
                            key={index} className="btn btn-sm border-0"
                            onClick={() =>
                                onPageChange(Math.min(currentPage + 5, totalPages))
                            }
                        >
                            ...
                        </button>
                        ) : (
                        <button
                            onClick={() => onPageChange(page)}
                            key={index} className={`dashboard-pagination-btn btn btn-sm rounded-circle ${currentPage === page
                                ? "btn-primary"
                                : "btn-outline-secondary"
                                }`}
                        >
                            {page}
                        </button>
                        )
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