import React from 'react';
import DevTools from '../DevTools';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = props => (
    <div>
        <nav className="navbar navbar-expand navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Państwa.js</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/countries">Kraje</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/continents">Kontynenty</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Kontakt</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
        <DevTools/>
    </div>
);

export default Navigation;
