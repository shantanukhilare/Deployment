import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCategories, getCategoryById } from "../services/CategoryService";
import bg from "../productImages/addProduct.jpg";
import Navigation_bar from "../components/Navigation_bar";
import { toast } from "react-toastify";

export default function EditCategory() {
  const { id } = useParams();
  const [category, setCategory] = useState({
    name: "",
  });

  const navigate=useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategoryById(id);
      setCategory(response);
    };
    fetchCategories();
  }, [id]);

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
        await editCategories(id,category);
        toast.success('Category updated successfully!!!');
        navigate('/category');
    }
    catch(error){
        toast.error('Something went Wrong...');
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
            <label about="categoryName" class="col-form-label">
              Category Name
            </label>
            <input
              type="text"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="form-control"
              name="categoryName"
              id="categoryName"
              value={category.name}
              placeholder="Category Name"
              style={{ backgroundColor: "transparent" }}
              required
            />
            <input type="submit" className="btn btn-primary mt-4" />
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
