import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import "./navbar.scss"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../authContext/AuthContext"
import { logout } from "../../authContext/AuthActions"

const Navbar = () => {

    //On scroll the transition in navbar
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }

    //for logout
    const { dispatch } = useContext(AuthContext)

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <span className="logo">Funflix</span>
                    <Link to="/" className="link">
                        <span className="nav">Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span className="nav navbarmainLinks">Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span className="nav navbarmainLinks">Movies</span>
                    </Link>
                    <span className="nav">New and Popular</span>
                    <span className="nav">My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())} >Logout</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar