import { ArrowDropDown, Search } from "@material-ui/icons";
import "./Navbar.scss";
import Logo from "../images/logo.png";
import { useState } from "react";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="logo" />
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
            <span>Settings</span>
            <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
