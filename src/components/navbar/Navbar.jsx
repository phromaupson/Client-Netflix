import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link  to="/" className="link">
          <span>Homepage</span>
          </Link>
          <Link  to="/series" className="link">
          <span>Series</span>
          </Link>
          <Link  to="/movies" className="link">
          <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>

        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/67808700_2588844581180146_157276819001704448_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHEtlqm3IOjhqSCIDY9TmrZBHy-K_8PejIEfL4r_w96MvE3tQ5vT4-4vFda1RXQAjE5zjRYdRjW6jzN1ZaRUZ3m&_nc_ohc=JCRbKZHmPMoAX-uYjDc&_nc_ht=scontent.fbkk5-3.fna&oh=b467df83c4242078c679afd6b756351d&oe=615AB87E"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
                <span>Setting</span>
                <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
