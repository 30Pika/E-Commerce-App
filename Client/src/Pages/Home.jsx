import React from 'react'
import Layout from '../Commponent/Layout/Layout'
import Category from './CustomerPanel/Category'
import homeimg from "../img/homeimg.jpg";

const Home = () => {

  return (
    <>
      <Layout >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 border border-3 border-dark">
              <img src={homeimg} class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <Category />
        <div className='mb-5'></div>
      </Layout>
    </>
  )
}

export default Home
