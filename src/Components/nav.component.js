import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import Nav from './Components/nav.component';

export default class Nav extends Component {
     render() {
        
        return (
        <nav className="navbar navbar-expand navbar-light fixed-top">

            <div className="container">

                <Link className="navbar-brand" to={'/'}>Home</Link>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav-collapse flex-items">


                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/register'} className="nav-link">Sign up</Link>
                        </li>

                    </ul>
                </div>
            </div>
            
        </nav>
        )
    }
 
}