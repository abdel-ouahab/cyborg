import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem, {NavItemDropDown} from '../../components/NavItem/NavItem'

import { Link } from 'react-router-dom'
import { useTransition } from 'react'

const Header = (props) => {
  
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <Link to='/' className="navbar-brand"><img src={logo} alt=""></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem><Link to='/' className="nav-link">Home</Link></NavItem>
                    <NavItem><Link to='/#' className="nav-link">Browse</Link></NavItem>
                    <NavItemDropDown>
                      <Link to='/#' className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Details</Link>
                        <ul className="dropdown-menu">
                            <NavItem><Link to='/#' className="dropdown-item">Fortnite</Link></NavItem>
                            <NavItem><Link to='/#' className="dropdown-item">Call od Duty</Link></NavItem>
                        </ul>
                      </NavItemDropDown>
                    <NavItem>
                      <Link to='/#' className="nav-link">Streams</Link></NavItem>
                    <NavItem><Link to='/profile' className="nav-link">Profile</Link></NavItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header