import { Button, Container, Form, InputGroup } from "react-bootstrap";
import "./App.scss";
import MyMeteo from "./components/MyMeteo";
// import MySearchBar from "./components/MySearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySearchBar from "./components/MySearchBar";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <MyMeteo city={city} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MySearchBar city={city} setCity={setCity} />}
          />
          <Route
            path="/MyMeteo/:city"
            element={<MyMeteo city={city} setCity={setCity} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
