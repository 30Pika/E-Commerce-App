import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bag from "../../img/bag.jpg";
import Layout from '../../Commponent/Layout/Layout';

const Category = () => {

    const [data, setdata] = useState([]);
    const [Empty, setEmpty] = useState("");
    const navigate = useNavigate();
    const key = localStorage.getItem("loopcompany");

    function getData() {
        axios.get(`http://localhost:2030/E-Commerce/api/buyproduct/product/${key}`
        ).then((res) => {
            setdata(res.data.data);
        }).catch((err) => {
            console.log(`Error From Loop Product List Page ${err}`);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    const Search = async (event) => {
        const key = event.target.value;
        setEmpty(key);
        await axios.get(`http://localhost:2030/E-Commerce/api/product/search/${key}`
        ).then((res) => {
            if (res.data.data) {
                setdata(res.data.data);
            }
        }).catch((err) => {
            console.log(`Error From Search Block Product List Page ${err}`);
        })
    }

    const Reset = () => {
        getData();
        setEmpty("");
    }

    const ConfirmBuy = (_id, name, company, category, subcategory, price, quntity, status) => {
        const buydata = { _id, name, company, category, subcategory, price, quntity, status };
        localStorage.setItem("buydata", JSON.stringify(buydata));
    }

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className='d-flex justify-content-center position-relative '>
                            <div className='position-absolute top-0 start-0 fs-3 fw-bold'>
                                <Link to="/SubCategory" className='text-decoration-none text-dark'>
                                    <i class='bx bx-left-arrow-alt'>Back</i>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <h1 className='text-center'>Products</h1>
                            <div className="d-flex flex-row mb-3">
                                <input type="text" placeholder='Search' onChange={Search} value={Empty}
                                    className='p-1 w-25 border-3 text-info fs-5 fw-bold me-1' />
                                <i class='bx bx-x fs-2 p-1 fw-bold border border-dark border-3'
                                    onClick={Reset}></i>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center shadow">
                                {
                                    data.map((itm) => {
                                        return (
                                            <>
                                                <div class="card m-3 shadow" style={{ width: "14rem" }}>
                                                    <img src={bag} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title ">Name : {itm.name}</h5>
                                                        <div>
                                                            <h6>Company : {itm.company}</h6>
                                                            <h6>Categroy : {itm.category}</h6>
                                                            <h6>Categroy : {itm.subcategory}</h6>
                                                        </div>
                                                        <div className="d-flex justify-content-around">
                                                            <div className='fs-5'><i className='bx bx-rupee '></i>{itm.price} /-</div>
                                                            <Link to="/ConfirmBuy"><button type="submit" className='btn btn-primary '
                                                                onClick={() => ConfirmBuy(itm._id, itm.name, itm.company, itm.category,
                                                                    itm.subcategory, itm.price, itm.quntity, itm.status)}>
                                                                Buy</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Category