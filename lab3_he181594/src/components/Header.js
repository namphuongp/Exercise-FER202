import { Link } from "react-router-dom";
function Header() {
  return (
    <div
      className="d-flex justify-content-between"
      style={{
        padding: "20px",
        borderBottom: "1px solid",
      }}
    >
      <span className="ms-3">ProductStore</span>
      <span className="d-flex justify-content-between gap-3">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </span>
    </div>
  );
}

export default Header;
