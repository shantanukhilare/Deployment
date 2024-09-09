import React, { useState, useEffect } from 'react';
import { addProduct } from '../services/ProductService';
import { getCategories } from '../services/CategoryService';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from "../productImages/addProduct.jpg";
import Navigation_bar from "../components/Navigation_bar"

export default function AppProduct() {
    const [product, setProduct] = useState({
        productName: '',
        description: '',
        price: 0,
        quantity: 0,
        categoryId: '',
    });

    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Error fetching categories. Please try again later.');
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newProduct = await addProduct(product);
            console.log('Product added:', newProduct);
            setMessage('Product added successfully!');
            setError('');
        } catch (error) {
            console.error('Error adding product:', error);
            setMessage('');
            setError('Error adding product. Please try again.');
        }
    };

    return (
        <div className="container-fluid" style={{
            backgroundImage: `url(${bg})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <Navigation_bar/>
            <h1 className="mb-4">Add Product</h1>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
                <div className='col-md-3'></div>
                <div className="col-md-6" >
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="productName"
                                name="productName"
                                value={product.productName}
                                onChange={handleChange}
                                placeholder="Product Name"
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="description"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                placeholder="Description"
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control mb-3"
                                id="price"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                placeholder="Price"
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                className="form-control mb-3"
                                id="quantity"
                                name="quantity"
                                value={product.quantity}
                                onChange={handleChange}
                                placeholder="Quantity"
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoryId">Category</label>
                            <select
                                
                                className="form-select mb-3"
                                id="categoryId"
                                name="categoryId"
                                value={product.categoryId}
                                onChange={handleChange}
                                style={{backgroundColor:"transparent" , borderColor:"lightgray" }}
                                required
                            >
                                <option value="" disabled>Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </form>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    );
}
