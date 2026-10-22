import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import Header from "../components/Header";
import { Table } from "react-bootstrap";
import NotFound from "./NotFound";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";

  function updateParams(changes) {
    const nextParams = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        nextParams.delete(key);
      } else {
        nextParams.set(key, value);
      }
    });
    setSearchParams(nextParams);
  }

  function keywordChangeHandler(e) {
    updateParams({ keyword: e.target.value, page: 1 });
  }

  function categoryChangeHandler(e) {
    const newCategory = e.target.value;
    updateParams({ category: newCategory === "all" ? "" : newCategory, page: 1 });
  }

  function sortChangeHandler(e) {
    updateParams({ sort: e.target.value, page: 1 });
  }

  const filteredProducts = products
    .filter((product) => {
      const matchesKeyword = product.name.toLowerCase().includes(keyword.toLowerCase());
      const matchesCategory =
        !category || product.category.toLowerCase() === category.toLowerCase();

      return matchesKeyword && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  // Lấy số phân trang từ URL
  const page = Math.max(Number(searchParams.get("page") || 1), 1);
  const pageSize = 4;
  const totalPages = Math.ceil(filteredProducts.length / pageSize) || 1;
  const currentPage = Math.min(page, totalPages);

  // Lấy sản phẩm cho trang hiện tại
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + pageSize
  );

  function goToPage(newPage) {
    updateParams({ page: newPage });
  }

  return (
    <div>
      <Header />
      <div>
        <div className="p-3 d-flex justify-content-between">
          <div>
            <label>Tìm kiếm theo tên: </label>
            <input
              type="text"
              placeholder="Search products..."
              className="ms-2"
              style={{ width: "600px" }}
              value={keyword}
              onChange={keywordChangeHandler}
            />
          </div>
          <div>
            <label>Tất cả danh mục: </label>
            <select
              className="ms-2"
              value={category}
              onChange={categoryChangeHandler}
            >
              <option value="all">Tất cả danh mục</option>
              <option value="Điện thoại">Điện thoại</option>
              <option value="Laptop">Laptop</option>
              <option value="Máy tính bảng">Máy tính bảng</option>
              <option value="Phụ kiện">Phụ kiện</option>
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
              disabled={currentPage === 1}
              onClick={() => updateParams({ page: Math.max(currentPage - 1, 1) })}
            >
              Trước
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  disabled={pageNumber === currentPage}
                  onClick={() => goToPage(pageNumber)}
                  style={{
                    fontWeight: pageNumber === currentPage ? "bold" : "normal",
                  }}
                >
                  {pageNumber}
                </button>
              )
            )}
            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                updateParams({ page: Math.min(currentPage + 1, totalPages) })
              }
            >
              Sau
            </button>
          </div>
        </div>
        <Table className="ms-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price.toLocaleString()} đ</td>
                  <td>
                    <Link to={`/products/${product.id}`}>View Details</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <NotFound></NotFound>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;