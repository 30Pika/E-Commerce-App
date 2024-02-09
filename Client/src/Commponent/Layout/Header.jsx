import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const auth = JSON.parse(localStorage.getItem("user"));

    const Logout = () => {
        localStorage.clear();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light border-2 border-bottom border-dark shadow">
                <div className="container-fluid ">
                    <h3 className="fw-bold ms-3"><i class='bx bxl-shopify fs-2 fw-bold me-2' ></i>E-Commerce App</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/Buy">
                                    Products
                                </Link>
                            </li>
                            {
                                auth ?
                                    <>
                                        {
                                            auth.admin_email === "admin@gmail.com" ?
                                                <>
                                                    <li className="nav-item ">
                                                        <Link style={{ width: "135px" }} className="nav-link active fs-5 fs-bold"
                                                            to="/AddProduct">Add Product</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link style={{ width: "130px" }} className="nav-link active fs-5 fs-bold"
                                                            to="/ProductList">Product List</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link style={{ width: "110px" }} className="nav-link active fs-5 fs-bold"
                                                            to="/ProductStatus">All Orders</Link>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li className="nav-item">
                                                        <Link className="nav-link active fw-bold fs-5"
                                                            to="/Cart">Cart</Link>
                                                    </li>
                                                </>
                                        }
                                        <li className="nav-item">
                                            <Link onClick={Logout}
                                                className="nav-link text-dark fs-5 fw-bold" to="/">
                                                Logout...</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link fs-5 fw-bold text-dark" to="/Login">
                                                Login..<i class='bx bx-log-in fs-4 fw-bold'></i>
                                            </Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
