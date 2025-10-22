import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Bai1 from "./components/bai1";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import NewsList from "./components/NewsList";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Trang chủ</Link>
          <Link to="/bai1" style={{ marginRight: "15px" }}>Bài 1</Link>
          <Link to="/bai2" style={{ marginRight: "15px" }}>Bài 2</Link>
          <Link to="/bai3">Bài 3</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>thực hành React</h2>} />
          <Route path="/bai1" element={<Bai1 />} />
          <Route path="/bai2" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetail />} />
          <Route path="/bai3" element={<NewsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






