import { Link} from "react-router-dom";
function Header() {

  return (
    <div
      className="d-flex justify-content-between"
      style={{
        padding: "10px",
        borderBottom: "1px solid",
      }}
    >
      <span className="ms-3">ProductStore</span>

      <Link to="/" >Home</Link>
      <Link to="/products" >Products</Link>
    </div>
  );
}

export default Header;
