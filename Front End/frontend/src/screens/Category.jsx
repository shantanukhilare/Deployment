import React, { useEffect, useState } from "react";
import Navigation_bar from "../components/Navigation_bar";
import { getCategories } from "../services/CategoryService";
import bg from "../productImages/addProduct.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="container-fluid" style={{
      backgroundImage: `url(${bg})`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
  }}>
      <Navigation_bar />
      <div className="container mt-3 col-6">        
        <h1 className="mb-4">Category List</h1>
        <Link to="/addCategory" className="btn btn-light">Add Category</Link>
        <hr />
        {error && <div className="alert alert-danger">{error}</div>}
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  {/* Placeholder for action buttons */}
                  <Link to={`/editCategory/${category.id}`} className="btn btn-dark me-4" style={{width:"100px"}}>EDIT</Link>
                  <Link to={`/deleteCategory/${category.id}`} className="btn btn-danger" style={{width:"100px"}}>DELETE</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
