import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Wrtie";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route exact path="/post/:postId" element={<Single />} />
        <Route
          exact
          path="/setting"
          element={user ? <Setting /> : <Register />}
        />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
