import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './product.css';

const Product = () => {

    const { products } = useSelector( state => state.products );

  return (
    <>
        <div className="container my-5">
            <div className="row justify product justify-content-center">
                <div className="col-md-10">
                    <Link to="/create" className='btn btn-primary btn-sm m-1'>Add new product</Link>
                    <Link to="/" className='btn btn-warning btn-sm'>Shop Page</Link>
                    <br />
                    <br />
                    <div className="card">
                        <h3 className='m-3'>All Products</h3>
                        <hr />
                        <div className="card-body">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Regular Price</th>
                                        <th>Sell Price</th>
                                        <th>Stock</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        products.map((data, i) => (
                                            <tr>
                                                <td>{ i+1 }</td>
                                                <td>{ data.name }</td>
                                                <td>{ data.regular_price }</td>
                                                <td>{ data.sale_price }</td>
                                                <td>{ data.stock }</td>
                                                <td>
                                                    <img src={`http://localhost:5050/images/products/${ data.photo }`} alt="" />
                                                </td>
                                                <td>
                                                    <a href="#" className='text-info'><i className='fa fa-eye'></i></a>
                                                    <a href="#" className='text-warning m-3'><i className='fa fa-edit'></i></a>
                                                    <a href="#" className='text-danger'><i className='fa fa-trash'></i></a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Product;