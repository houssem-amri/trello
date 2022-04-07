import "./App.css";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import Formu from "./components/Formu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table_user from "./components/Table_user";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Parent" element={<Parent />} />
          <Route path="/Form" element={<Formu />} />
          <Route path="/Table_user" element={<Table_user />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
