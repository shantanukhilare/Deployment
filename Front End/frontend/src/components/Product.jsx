import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/ProductService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import laptop1 from '../productImages/laptop1.jpg'
import laptop2 from '../productImages/laptop2.jpg'
import laptop3 from '../productImages/laptop3.jpg'
import laptop4 from '../productImages/laptop4.jpg'
import card from '../productImages/card.jpg'



export default function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Products available to Buy   </h1>
      <Link to='/addProduct' className="btn btn-dark mt-3 mb-3 d-flex justify-content-around" style={{backgroundColor:''}}>Add New Product</Link>
      <hr />
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 "  key={product.id}>
              <div className="card mb-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"style={{backgroundColor:"white"}}>
              <Link to={`/product/${product.id}`}>
                  <img
                    src={laptop4} 
                    className="card-img-top"
                    alt={product.productName}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text text-muted">${product.price}</p>
                  <Link to='/buy' className='btn btn-primary me-3'>Buy Now</Link>
                  <Link to='/addToCart' className='btn btn-warning'>Add to Cart</Link>            
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
