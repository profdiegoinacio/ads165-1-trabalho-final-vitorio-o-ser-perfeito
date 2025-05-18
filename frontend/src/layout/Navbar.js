import React from 'react'

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcontent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <button className="btn btn-outline-light">Adicionar Usuario</button>
                </div>
            </nav>


        </div>
    )
}
