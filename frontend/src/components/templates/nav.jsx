import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
export default props =>
    <aside className="menu-area">
    <nav className="menu">
    <Link to='/' href="#"><i className="fa fa-home"></i>Inicio</Link>
    <Link to='/users' href="/users"><i className="fa fa-users"></i>Usuarios</Link>
    </nav>
    </aside>
