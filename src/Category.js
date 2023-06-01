import Navbar from "./components/navbar";
import HomeSlider from "./components/home-slider.js";
import CategoryListing from "./components/category-listing";
import { Container } from "react-bootstrap";

function Category() {
  return (
    <>
      <Navbar />
      <Container style={{marginTop: "20px"}}>
        <HomeSlider />
        
        <h2 style={{marginTop: "20px"}}>Products</h2><hr></hr>
        <CategoryListing />
      </Container>
    </>
  )
}

export default Category;
