import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light border-2 border-bottom border-dark nav shadow">
                <div className="container-fluid nav">
                    <h3 className="fw-bold ms-3"><i class='bx bxl-shopify fs-2 fw-bold me-2' ></i>E-Commerce App</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">
                                    Cart (0)
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 fw-bold" to="/Login">
                                    <i class='bx bx-log-in fs-3 fw-bold'></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
