import React, { useState, useEffect } from "react";

const App = () => {
  // Sample Data (Replace with an API fetch if needed)
  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Slice the data to show only items for the current page
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Change page handler
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h1>React Pagination</h1>

      {/* Paginated Data */}
      <ul>
        {getPaginatedData().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            style={{
              margin: "5px",
              backgroundColor: currentPage === i + 1 ? "#FF7043" : "#f2f2f2",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
