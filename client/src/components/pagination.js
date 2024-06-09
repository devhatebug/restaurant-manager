import React from "react";

const Pagination = ({ currentPage, setCurrentPage, lengthPagination }) => {
  const pages = Array.from({ length: lengthPagination }, (_, i) => i + 1);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < lengthPagination) {
      setCurrentPage(currentPage + 1);
    }
  };

  const checkCurrentPage = (e) => {
    setCurrentPage(Number(e.target.value));
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={prePage}
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === 1
                ? "hover:bg-white hover:text-gray-500 cursor-not-allowed"
                : ""
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {pages.map((dt, id) => (
          <li key={id}>
            <button
              onClick={checkCurrentPage}
              value={dt}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === dt ? "bg-slate-600 text-white" : ""
              }`}
            >
              {dt}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === lengthPagination ? true : false}
            onClick={nextPage}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === lengthPagination
                ? "hover:bg-white hover:text-gray-500 cursor-not-allowed"
                : ""
            }`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
