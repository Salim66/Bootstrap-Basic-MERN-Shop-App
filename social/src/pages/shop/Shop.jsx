import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {

    const [modal, setModal] = useState(false);

    const handleQuickModalShow = () => {
        setModal(true);
    }

    const handleQuickModalClose = () => {
        setModal(false);
    }


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefZc_YwwEbo1yZVF_LWtIJZTmyBvAdEZZDJ7rcPH0_3sr0M91-eFZlBdyO2t2RVWZenk&usqp=CAU" alt="" />
            </div>
            <div className="col-md-12">
                <div className="navbar">
                    <ul className="navbar__ul">
                        <li className="navbar__li"><a href="#" className="navbar__link">Home</a></li>
                        <li className="navbar__li"><a href="#" className="navbar__link">Blog</a></li>
                        <li className="navbar__li"><a href="#" className="navbar__link">Shop</a></li>
                        <li className="navbar__li"><Link to="/products" className="navbar__link">Admin</Link></li>
                        <li className="navbar__li"><a href="#" className="navbar__link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row justify product justify-content-center my-5">
            
            <div className="col-md-12"></div>
            <div className="col-md-3">
                <div className="widget-search">
                    <h3>Search Product</h3>
                    <input type="search" className='form-control' />
                </div>
                <div className="widget-category my-4">
                    <h3>Categories</h3>
                    <ul className="list-group">
                        <li className="list-group-item"><a href="#">Man</a></li>
                        <li className="list-group-item"><a href="#">Woman</a></li>
                        <li className="list-group-item"><a href="#">Electronic</a></li>
                        <li className="list-group-item"><a href="#">Kids</a></li>
                    </ul>
                </div>
                <div className="widget-tags">
                    <h3>Tags</h3>
                    <div className="tags">
                        <a href="#">Eid</a>
                        <a href="#">Puja</a>
                        <a href="#">Boisakh</a>
                        <a href="#">Freedom</a>
                    </div>
                </div>
                <div className="widget-price my-4">
                    <h3>Price</h3>
                    <div className='search'>
                        <input type="range" min={10} max={10000} />
                        <input type="range" min={10} max={10000} />
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                            <div className="card-body">
                                <h3>Song AS 111</h3>
                            </div>
                            <div className="card-footer">
                                <p>Price : $1200</p>
                                <Button type='button' onClick={ handleQuickModalShow } className='btn btn-info btn-sm'>Quick View</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal show={modal} onHide={ handleQuickModalClose } centered>
            <Modal.Body>
                <div className="product__quick-view">
                    <img src="https://www.startech.com.bd/image/cache/catalog/camera/digital-camera/sony/w830/w830-2-500x500.jpg" alt="" />
                    <div className="product__contain">
                        <h2 className='product__name'>Song AS 111</h2>
                        <h4 className='product__price'>$1200</h4>
                        <p className="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tenetur!</p>
                        <button type='button' className='btn btn-dark'>Add To Cart</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </div>
  )
};

export default Shop;