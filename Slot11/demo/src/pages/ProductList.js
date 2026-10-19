import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/data";
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const sort = searchParams.get("sort") || "";

  function keywwordChangeHandler(e) {
    const newKeyword = e.target.value;
    setSearchParams({ keyword: newKeyword });
  }
  function sortChangeHandler(e) {
    const newSort = e.target.value;
    setSearchParams({ ...Object.fromEntries(searchParams), sort: newSort });
  }
  const filteredProducts = products
    .filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
    })
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });
  //lấy số phân trang từ url
  const page = Math.max(Number(searchParams.get("page") || 1), 1);
  const pageSize = 3;
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const currentPage = Math.min(page, totalPages);
  //lấy sản phẩm cho trang hiện tại
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + pageSize,
  );

  //hàm cập nhật url
  function updateParams(changes) {
    //sao chép các tham số của url hiện tại
    const nextParams = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        nextParams.delete(key);
      } else {
        nextParams.set(key, value);
      }
    });
    setSearchParams(nextParams);
  }
  function goToPage(newPage){
    updateParams({ page: newPage });
  }

  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">List of Products</Link>
      </nav>

      <h2>List of Products</h2>
      <div>
        <label>Tìm kiếm theo tên: </label>

        <input
          type="text"
          placeholder="Search products..."
          value={searchParams.get("keyword") || ""}
          onChange={keywwordChangeHandler}
        />
      </div>
      <div>
        <label>Sort: </label>
        <select value={sort} onChange={sortChangeHandler}>
          <option value="">Mặc định</option>
          <option value="asc">Giá thấp đến cao</option>
          <option value="desc">Giá cao đến thấp</option>
        </select>
      </div>
      <ul>
        {paginatedProducts.map((product) => (
          <li style={{ marginBottom: "10px" }} key={product.id}>
            <strong>{product.name}</strong>
            {" - "}
            <strong>{product.price.toFixed(2)}</strong>
            {" - "}
            <Link to={`/products/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
      <div>
        <button disabled={page === 1} onClick={() => updateParams({ page: Math.max(page - 1, 1) })}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            disabled={pageNumber === page}
            onClick={() => goToPage(pageNumber)}
            style={{ fontWeight: pageNumber === page ? "bold" : "normal" }}
          >
            {pageNumber}
          </button>
        ))}
        <button disabled={page === totalPages} onClick={() => updateParams({ page: Math.min(page + 1, totalPages) })}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
