import "./navbar.scss"
import {Search, Notifications, ArrowDropDown} from "@material-ui/icons"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt=""/>
                        <span>Homepage</span>
                        <span>Series</span>
                        <span>Movies</span>
                        <span>New and Popular</span>
                        <span>My List</span>
                </div>
                <div className="right">
                    <Search/>
                    <span>KID</span>
                    <Notifications/>
                    <img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/67808700_2588844581180146_157276819001704448_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHEtlqm3IOjhqSCIDY9TmrZBHy-K_8PejIEfL4r_w96MvE3tQ5vT4-4vFda1RXQAjE5zjRYdRjW6jzN1ZaRUZ3m&_nc_ohc=JCRbKZHmPMoAX-uYjDc&_nc_ht=scontent.fbkk5-3.fna&oh=b467df83c4242078c679afd6b756351d&oe=615AB87E" alt=""/>
                </div>
                <ArrowDropDown/>
            </div>
        </div>
    )
}

export default Navbar
