import Home from "./pages/Home";
import News from "./pages/news";
import About_us from "./pages/about_us";
import Contact_us from "./pages/contact_us";
import Gallery from "./pages/gallery";
import Services from "./pages/services";
import Appointment from "./pages/appointment";
import ShowNavbar from "./components/ShowNavbar";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        {/* <ShowNavbar> */}
        <Header></Header>
        {/* </ShowNavbar> */}

        <Routes>
          <Route path="" Component={Home} />
          <Route path="about_us" Component={About_us} />
          <Route path="contact_us" Component={Contact_us} />
          <Route path="gallery" Component={Gallery} />
          <Route path="news" Component={News} />
          <Route path="services" Component={Services} />
          <Route path="login" Component={Login} />
          <Route path="register" Component={Register} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
