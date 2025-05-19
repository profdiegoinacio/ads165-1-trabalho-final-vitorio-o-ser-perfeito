import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="m-2">
                    <a className="navbar-brand">TowerPad</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcontent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <button className="btn btnoutline-light" type="button">
                        <Link className="btn btn-outline-light" to="/">Usuarios</Link>
                    </button>
                    
                </div>
            </nav>


        </div>
    )
}
