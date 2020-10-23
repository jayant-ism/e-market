import React from "react"
import {BrowserRouter , Route , Switch} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home/home"
import Shop from "./Pages/Shop/Shop"
import Contact from "./Pages/Contact/Contact"
import Blogs from "./Pages/Blogs/Blogs"
import About from "./Pages/About/About"
import Featured from "./Pages/Featured/Featured"
import Error from "./Error"
import Header from "./Pages/Header/Header"
import Footer from "./Pages/Footer/Footer"
import Login from "./Pages/Login-user/login"
import Register from "./Pages/Register-user/Register"
import LoginMar from "./Pages/Login-Mar/login-mar"
import RegisterMar from "./Pages/Register-Mar/Register-Mar"
import Profile from "./Pages/Profile/Profile"
import ChangePassword from "./Pages/ChangePassword/changepassword"
import DashboardMar from "./Pages/Dashboard-Mar/Dashboard-Mar"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Cart from "./Pages/Cart/Cart"
import Import from "./Pages/Import/Import"
import EditProfile from "./Pages/Editprofile/EditProfile"
import Panel from "./Pages/Panel/Panel"

function App() {
  return (
      <BrowserRouter>
        <div>
          <Header />          
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}  />
          <Route path="/blogs" component={Blogs}  />
          <Route path="/shop" component={Shop}  />
          <Route path="/Featured" component={Featured}  />
          <Route path="/login" component={Login}  />
          <Route path="/register" component={Register}  />
          <Route path="/login-mar" component={LoginMar}  />
          <Route path="/register-mar" component={RegisterMar}  />
          <Route path="/profile" component={Profile}  />
          <Route path="/changepassword" component={ChangePassword}  />
          <Route path="/dashboardmar" component={DashboardMar}  />
          <Route path="/dashboard" component={Dashboard}  />
          <Route path="/dashboard" component={Dashboard}  />
          <Route path="/cart" component={Cart}  />
          <Route path="/import" component={Import}  />
          <Route path="/editprofile" component={EditProfile}  />
          <Route path="/panel" component={Panel} />
          <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
