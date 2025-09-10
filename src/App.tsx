import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Series from "./pages/Series";
import Stories from "./pages/Stories";
import Creators from "./pages/Creators";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/characters"
            element={<Characters />}
          />
          <Route
            path="/comics"
            element={<Comics />}
          />
          <Route
            path="/events"
            element={<Events />}
          />
          <Route
            path="/series"
            element={<Series />}
          />
          <Route
            path="/stories"
            element={<Stories />}
          />
          <Route
            path="/creators"
            element={<Creators />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
