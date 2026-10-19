import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
function NotFound() {
  return (
    <div className="text-center">
        <Header></Header>
      <h1>404 - Không tìm thấy trang</h1>
      <Link to="/">Về Trang Chủ</Link>
    </div>
  );
}

export default NotFound;
