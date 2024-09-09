import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../productImages/addProduct.jpg";
import Navigation_bar from "../components/Navigation_bar";
import { addCategories } from "../services/CategoryService";
import { toast } from "react-toastify";

export default function AddCategory() {
    const [category,setCategory] = useState({
        name:''
    }); 

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const newCategory=await addCategories(category);
            console.log('New Category Added: ',newCategory);
            toast.success('Category added successfully!!!');
        }
        catch(error){
            console.log('Something went wrong...',error);
            toast.error('Something went wrong...');
        }
    }

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navigation_bar />
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h1 className="mb-4">Add Category</h1>
          <form onSubmit={handleSubmit}>
            <label about="categoryName" class="col-form-label">Category Name</label>
            <input
              type="text"
              onChange={(e)=>{setCategory(e.target.value)}}
              className="form-control"
              name="categoryName"
              id="categoryName"
              placeholder="Category Name"
              style={{backgroundColor:"transparent"}}
            />
            <input
              type="submit"
              className="btn btn-primary mt-4"              
            />
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
