import { Col, Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";
import img1 from "./images/image copy 2.png";
import img2 from "./images/image copy 3.png";
import img3 from "./images/image copy 4.png";
import carimg from "./images/image copy 5.png";
import CarCard from "./CarCard";
import Header from "./components/Header";
import Menu from "./Menu";
function App() {
  const user = [
    { name: "Phuong", id: 1, age: 22, image: img1 },
    { name: "Tuan", id: 2, age: 30, image: img2 },
    { name: "Trung", id: 3, age: 25, image: img3 },
  ];
  const car = [
    { description: "This is the first car", image: carimg, color: "primary" },
    { description: "This is the second car", image: carimg, color: "warning" },
    { description: "This is the third car", image: carimg, color: "danger" },
  ];
  const pizza = [
    {
      name: "Margherita", oldPrice: 10, newPrice: 8, image: "https://example.com/margherita.jpg",
    }
  ];
  return (
    <div className="App">
      {/* <Container>
        <Row>
          {user.map((user) => (
            <Col md={4} key={user.id}>
              <UserCard user={user} />
            </Col>
          ))}
        </Row>
        <Row>
          {car.map((car) => (
            <Col md={4}>
              <CarCard car={car} />
            </Col>
          ))}
        </Row>
      </Container> */}
      <Header />
      <Menu />
    </div>
  );
}

export default App;
