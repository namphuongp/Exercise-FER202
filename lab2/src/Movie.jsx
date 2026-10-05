import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import Header from "./components/Header";
import { Button, Row, Col } from "react-bootstrap";
const movies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    director: "Christopher Nolan",
    duration: 169,
    description:
      "A group of astronauts travels through space to search for a new home for humanity.",
  },
  {
    id: 2,
    title: "Spirited Away",
    genre: "Animation",
    year: 2001,
    rating: 8.6,
    director: "Hayao Miyazaki",
    duration: 125,
    description:
      "A young girl enters a mysterious world and tries to save her parents.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    director: "Christopher Nolan",
    duration: 152,
    description:
      "Batman faces a dangerous criminal who creates chaos in Gotham City.",
  },
  {
    id: 4,
    title: "Parasite",
    genre: "Drama",
    year: 2019,
    rating: 8.5,
    director: "Bong Joon-ho",
    duration: 132,
    description:
      "A poor family gradually becomes involved in the life of a wealthy family.",
  },
  {
    id: 5,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    year: 2014,
    rating: 8.1,
    director: "Wes Anderson",
    duration: 100,
    description:
      "A series of unusual events takes place at a famous European hotel.",
  },
  {
    id: 6,
    title: "Your Name",
    genre: "Romance",
    year: 2016,
    rating: 8.4,
    director: "Makoto Shinkai",
    duration: 106,
    description: "Two young people mysteriously experience each other's lives.",
  },
];
export default function Movie() {
  const [filter, setFilter] = useState("all");
  const [genre, setGenre] = useState("all");
  const [search, setSearch] = useState("");
  const [favMovies, setFavMovies] = useState([]);
  const [movie, setMovie] = useState([movies]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const filteredMovies = useMemo(() => {
    return movies.filter((m) => {
      

      const matchSearch = m.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchSearch;
    });
  }, [search]);
  return (
    <Row>
      <Header />
      <Col md={8}>
        <div className="d-flex gap-2 my-3 mx-3" style={{ width: "600px" }}>
          <input
            className="form-control"
            aria-label="Tìm kiếm công việc"
            value={search}
            placeholder="Tìm kiếm"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2 my-3 mx-3">
          <select
            className="form-select"
            style={{ width: "150px" }}
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="all">All Genres</option>

            <option value="action">Action</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
          <select
            className="form-select"
            style={{ width: "200px" }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            Sắp xếp:<option value="all">Default</option>
            <option value="decrease">Rating: High to Low</option>
            <option value="increase">Rating: Low to High</option>
          </select>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            padding: "10px",
            borderBottom: "1px solid",
          }}
        />
        <div className="ms-3">
            <div className="mb-3">Tổng:     {movies.length}         | Yêu thích:       | Đang hiển thị: {filteredMovies.length}</div>
          {filteredMovies.map((m) => (
            <>
              <div className="mb-3">
                {m.title} | {m.genre} | {m.year} | {m.rating}{" "}
              </div>
              <div className="d-flex justify-content-end gap-3">
                <Button>Yêu thích</Button>
                <Button onClick={(e) => setSelectedMovie(e.target.value)}>
                  Chi tiết
                </Button>
              </div>
            </>
          ))}
        </div>
      </Col>
      <Col md={4}>
        <h3 className="text-center">Movie Details</h3>
        <div>Title: selectedMovie.title</div>
        <div>Genres: selectedMovie.genres</div>
        <div>Year: selectedMovie.year</div>
        <div>Year: selectedMovie.year</div>
        <div>Rating: selectedMovie.year</div>
        <div>Director: selectedMovie.year</div>
        <div className="mb-4">Duration: selectedMovie.year</div>

        <div>Description: </div>
        <Button>Close</Button>
      </Col>
    </Row>
  );
}
