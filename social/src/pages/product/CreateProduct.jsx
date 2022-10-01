import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const CreateProduct = () => {

    const [input, setInput] = useState({
        name: '',
        regular_price: '',
        sale_price: '',
        stock: '',
        photo: '',
        file: '',
        gallery: [],
        gall: [],
        categories: [],
        tags: []
    });

    const handleFormInput = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleCategoryForm = (e) => {

        if(e.target.checked) {
            let cats = input.categories;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                categories: cats
            }))
        }else {
            let cats = input.categories;
            let newCats = cats.filter(data => data != e.target.value);
            setInput((prevState) => ({
                ...prevState,
                categories: newCats
            }))
        }

    }

    const handleTagForm = (e) => {

        if(e.target.checked) {
            let tags = input.tags;
            tags.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                tags: tags
            }))
        }else {
            let tags = input.tags;
            let newTags = tags.filter(data => data != e.target.value);
            setInput((prevState) => ({
                ...prevState,
                tags: newTags
            }))
        }

    }

    const handleProductPhoto = (e) => {
        setInput((prevState) => ({
            ...prevState,
            file: e.target.files[0]
        }))
    }

    const handleProductGallery = (e) => {
        setInput((prevState) => ({
            ...prevState,
            gall: e.target.files
        }))
    }
    

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', input.name);
        data.append('regular_price', input.regular_price);
        data.append('sale_price', input.sale_price);
        data.append('stock', input.stock);
        for(let i = 0; i < input.categories.length; i++){
            data.append('categories', input.categories[i]);
        }
        for(let i = 0; i < input.tags.length; i++){
            data.append('tags', input.tags[i]);
        }
        data.append('photo', input.file);
        for(let i = 0; i < input.gall.length; i++){
            data.append('gallery', input.gall[i]);
        }

        try {

            
            
            await axios.post('http://localhost:5050/api/v1/product', data)
            .then(res => {

                swal({
                    title: "Good job!",
                    text: "Proudct added successfully",
                    icon: "success",
                    button: "Aww yiss!",
                });

                setInput({
                    name: '',
                    regular_price: '',
                    sale_price: '',
                    stock: '',
                    photo: '',
                    files: '',
                    gallery: [],
                    categories: [],
                    tags: []
                })

                e.target.reset();

            })
            .catch(error => {
                console.log(error);
            })

        } catch (error) {
            console.log(error);
        }

    }

  return (
        <div className="container my-5">
            <div className="row justify product justify-content-center">
                <div className="col-md-5">
                    <Link to='/products' className='btn btn-primary'>All Product</Link>
                    <br />
                    <br />
                    <div className="card">
                        <h3 className='m-3'>Create New Product</h3>
                        <hr />
                        <div className="card-body">
                            <form onSubmit={ handleFormSubmit } method="POST" encType='multipart/form-data'>
                                <div className="my-3">
                                    <label htmlFor="">Name</label>
                                    <input type="text" name='name' className='form-control' placeholder='Name' value={ input.name } onChange={ handleFormInput } />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Regular Price</label>
                                    <input type="number" name='regular_price' className='form-control' placeholder='Regular Price' value={ input.regular_price } onChange={ handleFormInput } />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Sall Price</label>
                                    <input type="number" name='sale_price' className='form-control' placeholder='Sall Price' value={ input.sale_price } onChange={ handleFormInput } />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Stock</label>
                                    <input type="number" name='stock' className='form-control' placeholder='Stock' value={ input.stock } onChange={ handleFormInput } />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Photo</label>
                                    <input type="file" name='photo' className='form-control' onChange={ handleProductPhoto } />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Gallery</label>
                                    <input type="file" name='gallery' className='form-control' multiple onChange={ handleProductGallery } />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Category</label>
                                    <hr />
                                    <label>
                                        <input type="checkbox" value="Men" onChange={ handleCategoryForm } /> Men
                                    </label>
                                    <br />
                                    <label>
                                        <input type="checkbox" value="Women" onChange={ handleCategoryForm } /> Women
                                    </label>
                                    <br />
                                    <label>
                                        <input type="checkbox" value="Electronic" onChange={ handleCategoryForm } /> Electronic
                                    </label>
                                    <br />
                                    <label>
                                        <input type="checkbox" value="Kids" onChange={ handleCategoryForm } /> Kids
                                    </label>
                                    <br />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Tags</label>
                                    <hr />
                                    <label>
                                        <input type="checkbox" value="Eid" onChange={ handleTagForm } /> Eid
                                    </label>
                                    <br />
                                    <label>
                                        <input type="checkbox" value="Pujs" onChange={ handleTagForm } /> Pujs
                                    </label>
                                    <br />
                                    <label>
                                        <input type="checkbox" value="Dengu" onChange={ handleTagForm } /> Dengu
                                    </label>
                                    <br />
                                    <label>
                                        <input type="checkbox" value="Freedom" onChange={ handleTagForm } /> Freedom
                                    </label>
                                    <br />
                                </div>
                                <div className="my-3">
                                    <input type="submit" className='btn btn-success form-control' value='Add New' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};

export default CreateProduct;