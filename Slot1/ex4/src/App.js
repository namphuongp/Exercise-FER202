import React, { useState } from "react";

const people = [
  { name: "Jack", age: 50 },
  { name: "Michael", age: 9 },
  { name: "John", age: 40 },
  { name: "Ann", age: 19 },
  { name: "Elisabeth", age: 16 },
];

const arrayNums = [1, 2, 3, 4];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: { street: "Lalaland 12" },
};

// Closure Counter
const createCounter = () => {
  let count = 0;
  return () => count++;
};
const getNextNumber = createCounter();

export default function App() {
  const [counterValue, setCounterValue] = useState(0);

  const firstTeenager = people.find((p) => p.age >= 10 && p.age <= 20);
  const allTeenagers = people.filter((p) => p.age >= 10 && p.age <= 20);
  const isEveryTeenager = people.every((p) => p.age >= 10 && p.age <= 20);
  const isAnyTeenager = people.some((p) => p.age >= 10 && p.age <= 20);

  // 1. Name of each company 
  const companyNames = [];
  companies.forEach((c) => companyNames.push(c.name));

  // 2. Companies started after 1987
  const companiesAfter1987 = companies
    .filter((c) => c.start > 1987)
    .map((c) => c.name);

  // 3. Retail companies increment start by 1
  const retailCompanies = companies
    .filter((c) => c.category === "Retail")
    .map((c) => ({ ...c, start: c.start + 1 }));

  // 4. Sort companies based on end date ascending
  const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);

  // 5. Sort ages descending
  const sortedAges = [...ages].sort((a, b) => b - a);

  // 6. Sum of all ages using reduce
  const sumAges = ages.reduce((acc, curr) => acc + curr, 0);

  const { name: compName, category: compCategory } = companies[0];
  const newCompObj = {
    name: compName,
    category: compCategory,
    print() {
      return `Company Name: ${this.name}`;
    },
  };

  const sumAll = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

  const toArray = (...args) =>
    args.flatMap((arg) => (Array.isArray(arg) ? arg : [arg]));

  const {
    address: { street },
  } = person;

  const parseQueryParams = (url) => {
    const queryString = url.split("?")[1];
    if (!queryString) return {};
    return Object.fromEntries(new URLSearchParams(queryString).entries());
  };

  const runPromise = () => {
    new Promise((resolve, reject) => {
      const num = Math.floor(Math.random() * 10) + 1;
      if (num > 5) resolve(num);
      else reject("Error");
    })
      .then((res) => alert(`Success! Random Number: ${res}`))
      .catch((err) => alert(`Notice: ${err}`));
  };

  const handleIncrement = () => {
    setCounterValue(getNextNumber());
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#ffffff",
        color: "#000000",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          display: "flex",
          backgroundColor: "#525252",
          height: "50px",
          alignItems: "center",
        }}
      >
        <a
          href="#home"
          style={{
            color: "white",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "18px",
            backgroundColor: "#2eaf7d",
          }}
        >
          Home
        </a>
        <a
          href="#search"
          style={{
            color: "white",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Search
        </a>
        <a
          href="#contact"
          style={{
            color: "white",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Contact
        </a>
        <a
          href="#login"
          style={{
            color: "white",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: "18px",
            backgroundColor: "black",
          }}
        >
          Login
        </a>
      </nav>

      <div
        style={{ padding: "20px 40px", maxWidth: "800px", margin: "0 auto" }}
      >
        <section style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "normal",
              margin: "10px 0",
            }}
          >
            Hello{" "}
            <span style={{ color: "blue" }}>
              <strong>React</strong>
            </span>
          </h1>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              style={{ width: "180px", height: "180px", margin: "20px 0" }}
            />
          </div>
          <div
            style={{
              borderBottom: "2px solid #0088cc",
              width: "70%",
              margin: "0 auto 10px auto",
            }}
          ></div>
          <p
            style={{
              fontStyle: "italic",
              color: "#0088cc",
              fontSize: "22px",
              margin: "5px 0",
              fontFamily: "serif",
            }}
          >
            This is the React logo!
          </p>
          <p
            style={{
              fontStyle: "italic",
              color: "#888",
              fontSize: "14px",
              margin: "0 0 20px 0",
            }}
          >
            (I don't know why it is here either)
          </p>
          <p style={{ fontSize: "18px" }}>
            The library for web and native user interfaces
          </p>
        </section>

        <section style={{ textAlign: "left", marginTop: "30px" }}>
          <h1
            style={{
              color: "blue",
              fontSize: "44px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            This is JSX
          </h1>
          <h2
            style={{ fontSize: "28px", fontWeight: "bold", margin: "10px 0" }}
          >
            Course names
          </h2>
          <ul style={{ fontSize: "22px", paddingLeft: "40px" }}>
            <li>React</li>
            <li>ReactNative</li>
            <li>NodeJs</li>
          </ul>
        </section>

        <section style={{ textAlign: "left", marginTop: "30px" }}>
          <h3>Results</h3>
          <div>
            <h2 style={{ color: "red" }}>Phần 1</h2>
            <p>
              <strong>First Teenager:</strong>{" "}
              {firstTeenager
                ? `${firstTeenager.name} (${firstTeenager.age})`
                : "None"}
            </p>
            <p>
              <strong>All Teenagers:</strong>{" "}
              {allTeenagers.map((t) => `${t.name} (${t.age})`).join(", ")}
            </p>
            <p>
              <strong>Every Person is Teenager?:</strong>{" "}
              {isEveryTeenager ? "True" : "False"}
            </p>
            <p>
              <strong>Any Person is Teenager?:</strong>{" "}
              {isAnyTeenager ? "True" : "False"}
            </p>

            <h2 style={{ color: "red" }}>Phần 2: Array [1,2,3,4]</h2>
            <p>
              <strong>Sum:</strong>{" "}
              {arrayNums.reduce((acc, curr) => acc + curr, 0)}
            </p>

            {/*  */}
            <h2 style={{ color: "red" }}>Phần 3</h2>
            <p>
              <strong>All Companies:</strong> {companyNames.join(", ")}
            </p>
            <p>
              <strong>Started After 1987:</strong>{" "}
              {companiesAfter1987.join(", ")}
            </p>
            <p>
              <strong>Sorted Companies by End Date:</strong>{" "}
              {sortedCompanies.map((c) => `${c.name} (${c.end})`).join(", ")}
            </p>
            <p>
              <strong>Sorted Ages Descending:</strong> {sortedAges.join(", ")}
            </p>
            <p>
              <strong>Sum of Ages:</strong> {sumAges}
            </p>
            <p>
              <strong>New Object Method Output:</strong> {newCompObj.print()}
            </p>
            <p>
              <strong>Sum Unknown Numbers (1, 2, 3, 4, 5):</strong>{" "}
              {sumAll(1, 2, 3, 4, 5)}
            </p>
            <p>
              <strong>Flat Array Args (1, [2, 3], 4):</strong>{" "}
              {JSON.stringify(toArray(1, [2, 3], 4))}
            </p>
            <p>
              <strong>Destructured Street:</strong> {street}
            </p>
            <p>
              <strong>Closure Counter Value:</strong> {counterValue}{" "}
              <button
                onClick={handleIncrement}
                style={{ marginLeft: "10px", padding: "2px 8px" }}
              >
                Increment Counter
              </button>
            </p>
            <p>
              <strong>Parsed Query Params:</strong>{" "}
              {JSON.stringify(
                parseQueryParams("https://example.com?page=1&sort=asc"),
              )}
            </p>

            <div style={{ marginTop: "15px" }}>
              <button
                onClick={runPromise}
                
              >
                Test Promise Function
              </button>
            </div>
          </div>
        </section>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            maxWidth: "650px",
            padding: "20px 0",
          }}
        >
          {retailCompanies.map((company, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                border: "1px solid #d3d3d3",
                borderRadius: "3px",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  flex: 2,
                  borderRight: "1px solid #d3d3d3",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                <p style={{ margin: 0, color: "#000" }}>{company.name}</p>
              </div>

              <div
                style={{
                  flex: 1,
                  borderRight: "1px solid #d3d3d3",
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                <p style={{ margin: 0, color: "#000" }}>{company.start}</p>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                <p style={{ margin: 0, color: "#000" }}>{company.end}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
