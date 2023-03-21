import Header from "./components/Header";
import "./App.css";
import { createContext } from "react";
import Home from "./components/Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  redirect,
} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Goo from "./components/Goo";
import FollowMe from "./components/FollowMe";
import UserDetails from "./components/UserDetails";
import TodosFolder from "./components/TodosFolder";
import More from "./components/More";
import HeaderTwo from "./components/HeaderTwo";
import ProjectOne from "./components/Projects/ProjectOne";
import ProjectTwo from "./components/Projects/ProjectTwo";
import ProjectThree from "./components/Projects/ProjectThree";
import ProjectFour from "./components/Projects/ProjectFour";
import ProjectFive from "./components/Projects/ProjectFive";
import ProjectSix from "./components/Projects/ProjectSix";
import AllMeetups from "./components/Projects/ProjectFour/AllMeetups";
import NewMeetups from "./components/Projects/ProjectFour/NewMeetups";
import Favorites from "./components/Projects/ProjectFour/Favorites";
const Bilal = createContext();
function App() {
  const [showHeader, setShowHeader] = useState(true);
  const HideHeader = () => {
    console.log("command Runs");
    setShowHeader(false);
  };
  const ToShowHeader = () => {
    setShowHeader(true);
  };

  return (
    <div className="main">
      <Bilal.Provider value={{}}>
        <Router>
          {showHeader ? <Header /> : null}

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path=":userId" element={<UserDetails />} />
            <Route path="/About" element={<About />}>
              <Route path="Goo" element={<Goo />} />
            </Route>
            <Route path="/Contact" element={<Contact />}>
              <Route path="FollowMe" element={<FollowMe />} />
            </Route>
            <Route path="/Services" element={<Services />} />

            <Route path="/More" element={<More />} />
            <Route
              path="/HeaderTwo"
              element={<HeaderTwo ToHide={HideHeader} />}
            />

            <Route path="/Projects/ProjectOne" element={<ProjectOne />} />
            <Route path="/Projects/ProjectTwo" element={<ProjectTwo />} />
            <Route path="/Projects/ProjectThree" element={<ProjectThree />} />
            <Route
              path="/Projects/ProjectFour"
              element={<ProjectFour ToShow={ToShowHeader} />}
            >
              <Route path="AllMeetups" element={<AllMeetups />} />
              <Route path="NewMeetups" element={<NewMeetups />} />
              <Route path="Favorites" element={<Favorites />} />
            </Route>
            <Route path="Projects/ProjectFive" element={<ProjectFive />} />
            <Route path="Projects/ProjectSix" element={<ProjectSix />} />
          </Routes>
        </Router>
      </Bilal.Provider>
      <Outlet />
    </div>
  );
}

export default App;
export { Bilal };
