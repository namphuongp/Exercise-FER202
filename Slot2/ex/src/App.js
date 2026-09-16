import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
// EXERCISE 5
function Exercise5_1() {
  return (
    <div className="container my-4">
      <div
        className="p-4 rounded mb-4"
        style={{ backgroundColor: "lightgray" }}
      >
        <h1>Let's test the grid!</h1>
      </div>
      <ul className="nav mb-4">
        <li className="nav-item">
          <a className="nav-link active" href="#active">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#link1">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#link2">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#disabled"
            tabIndex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
      <div
        className="row text-center mb-2"
        style={{ backgroundColor: "lightgray" }}
      >
        <div className="col-6 border border-dark p-3">First col</div>
        <div className="col-6 border border-dark p-3">Second col</div>

        <div className="col-4 border border-dark p-3">col</div>
        <div className="col-4 border border-dark p-3">col</div>
        <div className="col-4 border border-dark p-3">col</div>

        <div className="col-3 border border-dark p-3">col</div>
        <div className="col-3 border border-dark p-3">col</div>
        <div className="col-3 border border-dark p-3">col</div>
        <div className="col-3 border border-dark p-3">col</div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "lightgray" }}>
        <h2>Created by ABC!</h2>
      </div>
      <div className="p-4 bg-light rounded mb-5">
        <h2>My First Bootstrap Page</h2>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3 col-4 mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML5"
            className="img-fluid"
            style={{ maxHeight: "150px" }}
          />
        </div>
        <div className="col-md-3 col-4 mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt="CSS3"
            className="img-fluid"
            style={{ maxHeight: "150px" }}
          />
        </div>
        <div className="col-md-3 col-4 mb-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            alt="Bootstrap"
            className="img-fluid"
            style={{ maxHeight: "150px" }}
          />
        </div>
      </div>
    </div>
  );
}

// EXERCISE 5.2
function Exercise5_2() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div
        className="text-center py-4"
        style={{ backgroundColor: "#e67e22", color: "white" }}
      >
        <div className="bg-white d-inline-block p-3 rounded mb-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg"
            alt="FPT Education"
            style={{ height: "50px" }}
          />
          <h4 className="text-danger font-weight-bold m-0 mt-1">
            FPT UNIVERSITY
          </h4>
        </div>
        <div>
          <a href="#home" className="text-white mx-2 text-decoration-none">
            Home
          </a>
          <a href="#about" className="text-white mx-2 text-decoration-none">
            About
          </a>
          <a href="#contact" className="text-white mx-2 text-decoration-none">
            Contact
          </a>
        </div>
      </div>
      <div className="container text-center my-5 py-4">
        <h2>About</h2>
        <p className="text-muted">This is the about section of the website.</p>
        <h2 className="mt-4">Contact</h2>
        <p className="text-muted">
          For any inquiries, please contact us at example@example.com.
        </p>
      </div>
      <div
        className="text-center py-3"
        style={{ backgroundColor: "#f39c12", color: "white" }}
      >
        <p className="m-0">© 2023 Website. All rights reserved.</p>
      </div>
    </div>
  );
}

// EXERCISE 5.3
function Exercise5_3() {
  const students = [
    {
      id: "DE160182",
      name: "Nguyễn Hữu Quốc Khánh",
      location: "DaNang",
      img: "image.png",
    },
    {
      id: "DE160377",
      name: "Choy Vĩnh Thiện",
      location: "QuangNam",
      img: "image copy 2.png",
    },
    {
      id: "DE160547",
      name: "Đỗ Nguyên Phúc",
      location: "QuangNam",
      img: "image copy 3.png",
    },
    {
      id: "DE170049",
      name: "Lê Hoàng Minh",
      location: "DaNang",
      img: "image copy 4.png",
    },
  ];

  return (
    <div>
      <nav
        className="navbar navbar-light px-4 mx-auto"
        style={{ width: "40%", height: "100px", backgroundColor: "#fdc597" }}
      >
        <a className="navbar-brand d-flex align-items-center" href="#fpt">
          <span className="fw-bold me-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg"
              alt="FPT University"
              style={{ height: "30px" }}
            />
          </span>
          <span
            className="me-2 small"
            style={{ fontSize: "15px", color: "#d6790e" }}
          >
            Trang chủ
          </span>
          <span
            className="me-2 small"
            style={{ fontSize: "15px", color: "#d6790e" }}
          >
            Ngành học
          </span>
          <span
            className="me-2 small"
            style={{ fontSize: "15px", color: "#d6790e" }}
          >
            Tuyển sinh
          </span>
          <span
            className="small"
            style={{ fontSize: "15px", color: "#d6790e" }}
          >
            Sinh viên
          </span>
        </a>
        <form className="d-flex">
          <input
            className="form-control form-control-sm me-2"
            type="search"
            placeholder="Search"
          />
        </form>
      </nav>

      <div
        className=" text-center py-3 mx-auto"
        style={{ backgroundColor: "#ec9b59", width: "40%" }}
      >
        <img
          src="image copy.png"
          alt="FPT University"
          className="img-fluid"
          style={{ width: "90%" }}
        />
      </div>

      <div className="container my-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#home">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Students
            </li>
          </ol>
        </nav>

        <h2 className="text-center my-4">Students Detail</h2>

        <div className="row g-4 mx-auto" style={{ maxWidth: "700px" }}>
          {students.map((st, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card text-center p-3 shadow-sm">
                <img
                  src={st.img}
                  className="card-img-top mx-auto rounded"
                  alt={st.name}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h6 className="text-muted">{st.id}</h6>
                  <div className="d-flex justify-content-between 3">
                    <span>{st.name}</span>
                    <span>{st.location}</span>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" />
                      <label className="form-check-label">Absent</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="Present"
                      />
                      <label className="form-check-label">Present</label>
                    </div>
                  </div>
                  <button
                    className="btn text-white mt-2"
                    style={{ backgroundColor: "#ec9b59" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer
        className=" text-dark mt-3 mx-auto py-3 px-4 "
        style={{ width: "60%", backgroundColor: "#da7421" }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h5>Our Address</h5>
            <p className="mb-0">Khu đô thị FPT Đà Nẵng</p>
            <p className="mb-0">+84023111111</p>
            <p className="mb-0">
              <a href="mail">fptudn@fpt.edu.vn</a>
            </p>
          </div>
          <div>
            <span className="me-2 fw-bold">G+</span>
            <span className="me-2 fw-bold">f</span>
            <span className="me-2 fw-bold">in</span>
            <span className="me-2 fw-bold">yt</span>
          </div>
        </div>
        <p className="text-center m-0 mt-3">© Copyright 2023</p>
      </footer>
    </div>
  );
}

// EXERCISE 6
function Exercise6() {
  const products = [
    {
      id: 1,
      title: "Product",
      oldPrice: "100.000 vnd",
      price: "80.000 vnd",
      sale: false,
    },
    {
      id: 2,
      title: "Product",
      oldPrice: "100.000 vnd",
      price: "80.000 vnd",
      sale: false,
    },
    {
      id: 3,
      title: "Product",
      oldPrice: "100.000 vnd",
      price: "80.000 vnd",
      sale: false,
    },
    {
      id: 4,
      title: "Product",
      oldPrice: "100.000 vnd",
      price: "80.000 vnd",
      sale: true,
    },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <a className="navbar-brand" href="#nav">
          Navbar
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item me-2">Home</li>
            <li className="nav-item me-2">Link</li>
            <li className="nav-item me-2">Dropdown</li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div
        className="bg-secondary text-white d-flex align-items-center justify-content-center"
        style={{ height: "530px", width: "100%" }}
      >
        <h1 className="display-1 justify-content-center">1920 x 530</h1>
      </div>

      <div className="container my-5">
        <h2>NEW PRODUCT</h2>
        <p className="text-muted">List product description</p>

        <div className="row g-4">
          {products.map((p) => (
            <div className="col-md-3" key={p.id}>
              <div
                className="card position-relative border shadow-sm"
                style={{ width: "280px" }}
              >
                {p.sale && (
                  <span className="badge bg-warning position-absolute top-0 end-0 m-2 px-3 py-2 text-dark">
                    Sale
                  </span>
                )}
                <div
                  className=" text-center text-muted d-flex align-items-center justify-content-center"
                  style={{
                    height: "280px",
                    width: "280px",
                    backgroundColor: "#bebebe",
                  }}
                >
                  <h5>280 x 280</h5>
                </div>
                <div className="card-body">
                  <h6 className="card-title">{p.title}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-decoration-line-through text-muted small">
                      {p.oldPrice}
                    </span>
                    <span className="text-warning fw-bold">{p.price}</span>
                  </div>
                  <button className="btn btn-outline-primary w-100 mt-3 btn-sm">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// EXERCISE 7
function Exercise7() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Cards Columns</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="p-3 bg-primary text-dark">
            <div className="bg-white  text-center">
              <img src="image copy 5.png" alt="Car" className="img-fluid" />
            </div>
            <p className="text-center">Some text inside the first card</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-warning text-dark">
            <div className="bg-white text-center">
              <img src="image copy 5.png" alt="Car" className="img-fluid" />
            </div>
            <p className="text-center">Some text inside the second card</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-danger text-dark">
            <div className="bg-white  text-center">
              <img src="image copy 5.png" alt="Car" className="img-fluid" />
            </div>
            <p className="text-center">Some text inside the third card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// EXERCISE 8
function Exercise8() {
  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <div className="card p-4 shadow-sm">
        <h2 className="mb-4">Form đặt vé máy bay</h2>
        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Họ tên</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Họ tên"
                required
              />
              <span className="input-group-text">vnđ</span>
            </div>
            <small className="form-text text-muted">
              Phải nhập 5 ký tự, in hoa....
            </small>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Địa chỉ</label>
            <input type="text" className="form-control" required />
            <small className="form-text text-muted">
              Phải nhập 5 ký tự, in hoa....
            </small>
          </div>

          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label fw-bold">Đi từ</label>
              <select className="form-select">
                <option value="Hà nội">Hà nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="TP. HCM">TP. HCM</option>
              </select>
            </div>
            <div className="col-6">
              <label className="form-label fw-bold">Đến</label>
              <select className="form-select">
                <option value="Hà nội">Hà nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="TP. HCM">TP. HCM</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold d-block">
              Chọn chiều đi (Khứ hồi)
            </label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="checkDi">
                Đi
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="checkVe">
                Về
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
            Đặt vé
          </button>
        </form>
      </div>
    </div>
  );
}

// EXERCISE 9
function Exercise9() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card p-3 my-3 shadow-sm">
        <p className="text-success">Hello, World!</p>
        <p>Xin chào, tôi tên là Phạm Nam Phương, đang học FER202.</p>
      </div>

      <div className="card p-3 my-3 shadow-sm">
        <div className="d-flex align-items-center gap-3 my-2">
          <button
            className="btn px-3 fw-bold"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <span className="fs-4 fw-bold">{count}</span>
          <button
            className="btn px-3 fw-bold"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="card p-3 shadow-sm d-flex flex-row align-items-center justify-content-between w-50" >
        <img
          src="image copy 6.png"
          alt="FPT Logo"
          style={{ maxHeight: "30%", width: "20%" }}
        />
        <div className="text-center me-3">
          <h6 className="text-dark fw-bold mb-1">Hoai Nguyen - FPT DaNang</h6>
          <h6 className="text-muted m-0">Mobile: 0982827763</h6>
        </div>
      </div>
    </div>
  );
}


export default function App() {
  const [activeTab, setActiveTab] = useState("ex5_1");

  const renderContent = () => {
    switch (activeTab) {
      case "ex5_1":
        return <Exercise5_1 />;
      case "ex5_2":
        return <Exercise5_2 />;
      case "ex5_3":
        return <Exercise5_3 />;
      case "ex6":
        return <Exercise6 />;
      case "ex7":
        return <Exercise7 />;
      case "ex8":
        return <Exercise8 />;
      case "ex9":
        return <Exercise9 />;
      default:
        return <Exercise5_1 />;
    }
  };

  return (
    <div className="min-vh-100 bg-light">
      <header className="bg-dark text-white p-3 text-center sticky-top shadow">
        <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
          <Button onClick={() => setActiveTab("ex5_1")}>Ex 5.1 Grid</Button>
          <Button onClick={() => setActiveTab("ex5_2")}>Ex 5.2 FPT Site</Button>
          <Button onClick={() => setActiveTab("ex5_3")}>Ex 5.3 Students</Button>
          <Button onClick={() => setActiveTab("ex6")}>Ex 6 Grid Layout</Button>
          <Button onClick={() => setActiveTab("ex7")}>Ex 7 Cards Column</Button>
          <Button onClick={() => setActiveTab("ex8")}>Ex 8 Form Flight</Button>
          <Button onClick={() => setActiveTab("ex9")}>
            Ex 9 React Component
          </Button>
        </div>
      </header>

      <main>{renderContent()}</main>
    </div>
  );
}
