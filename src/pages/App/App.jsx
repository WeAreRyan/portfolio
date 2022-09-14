import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import About from "../About/About";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer"

export default function App() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(null);

  function aboutToggle() {
    if (showAbout) {
      setShowAbout(null);
    } else {
      setShowAbout(true);
    }
  }

  return (
    <main className="App">
      
      {/* {user ? ( */}
      <>
        <NavBar user={user} setUser={setUser} aboutToggle={aboutToggle} showAbout={showAbout} />
        <div className="container-fluid overflow-auto">
        {showAbout && (
          <AboutMe /> )}
          <Routes>
            <Route path="/" element={<Home user={user} setUser={setUser} />} />
            <Route
              path="/work"
              element={<Work user={user} setUser={setUser} />}
            />
            <Route
              path="/projects"
              element={<Projects user={user} setUser={setUser} />}
            />
            <Route
              path="/about"
              element={<About user={user} setUser={setUser} />}
            />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </>
      {/* ) : (
        <AuthPage setUser={setUser} />
      )} */}
    </main>
  );
}
