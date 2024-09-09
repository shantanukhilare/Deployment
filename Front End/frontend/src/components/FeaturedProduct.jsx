import slide1 from "../productImages/slide2.jpeg";
import slide2 from "../productImages/slide3.jpeg";
import slide3 from "../productImages/slide4.jpeg";

export const FeaturedProduct = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide mt-4"
      data-bs-ride="carousel"
      style={{
        width: "88%",
        borderRadius: "10px",
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner" style={{ borderRadius: "50px" }}>
        <div class="carousel-item active">
          <img
            src={slide1}
            class="d-block w-100"
            alt="..."
            style={{ width: "500px", height: "500px" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Title-1</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={slide2}
            class="d-block w-100"
            alt="..."
            style={{ width: "500px", height: "500px" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Title-2</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
       
        <div class="carousel-item">
          <img
            src={slide3}
            class="d-block w-100"
            alt="..."
            style={{ width: "500px", height: "500px" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Title-3</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
