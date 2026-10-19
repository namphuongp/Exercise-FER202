import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import Header from "../components/Header";
import { Table } from "react-bootstrap";
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";

  function keywwordChangeHandler(e) {
    const newKeyword = e.target.value;
    setSearchParams({ keyword: newKeyword });
  }
  function categoryChangeHandler(e) {
    const newCategory = e.target.value;
    setSearchParams({ category: newCategory });
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
  const pageSize = 4;
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
  function goToPage(newPage) {
    updateParams({ page: newPage });
  }

  return (
    <div>
      <Header />
      <div>
        <div className=" p-3 d-flex justify-content-between">
          <div>
            <label>Tìm kiếm theo tên: </label>

            <input
              type="text"
              placeholder="Search products..."
              className="ms-2"
              style={{ width: "600px" }}
              value={searchParams.get("keyword") || ""}
              onChange={keywwordChangeHandler}
            />
          </div>
          <div>
            <label>Tất cả danh mục: </label>
            <select
              className="ms-2"
              value={category}
              onChange={categoryChangeHandler}
            >
              <option value="All Category">Tất cả danh mục</option>
              <option value="điện thoại">Điện thoại</option>
              <option value="laptop">Laptop</option>
              <option value="máy tính bảng">Máy tính bảng</option>
            </select>
          </div>
          <div>
            <label>Sort: </label>
            <select className="ms-2" value={sort} onChange={sortChangeHandler}>
              <option value="">Mặc định</option>
              <option value="asc">Giá thấp đến cao</option>
              <option value="desc">Giá cao đến thấp</option>
            </select>
          </div>
        </div>
        <div>
            <div className="ms-3">
                Tổng: {filteredProducts.length} | Trang: {currentPage}/{totalPages}
            </div>
          <div className="d-flex justify-content-end me-3">
            <button
              disabled={page === 1}
              onClick={() => updateParams({ page: Math.max(page - 1, 1) })}
            >
              Trước
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  disabled={pageNumber === page}
                  onClick={() => goToPage(pageNumber)}
                  style={{
                    fontWeight: pageNumber === page ? "bold" : "normal",
                  }}
                >
                  {pageNumber}
                </button>
              ),
            )}
            <button
              disabled={page === totalPages}
              onClick={() =>
                updateParams({ page: Math.min(page + 1, totalPages) })
              }
            >
              Sau
            </button>
          </div>
        </div>
        <Table className="ms-3">
          <thead>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/products/${product.id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
