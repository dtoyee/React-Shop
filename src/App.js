import Navbar from "./components/navbar";
import HomeSlider from "./components/home-slider.js";
import ProductListings from "./components/product-listings";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const onAdd = (product) => {
    const exists = cartItems.find(x => x.id === product.id)
    if(exists) {
      setCartItems(cartItems.map((x) => 
        x.id === product.id ? {...exists, qty: exists.qty + 1} : x
      ))
      console.log(cartItems)
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
      console.log(cartItems)
    }
  }

  const getProducts = async () => {
      await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then(data => {
          data.products.map(p => {
              setProducts(products => [...products, p])
          })
      })
    }

    useEffect(() => {
        getProducts()
        setLoading(false)
    }, [])

    if(loading) return <h2>Loading...</h2>

  return (
    <>
      <Navbar cartItems={cartItems} onAdd={onAdd} />
      <Container style={{marginTop: "20px"}}>
        <HomeSlider />
        
        <h2 style={{marginTop: "20px"}}>Products</h2><hr></hr>
        <ProductListings onAdd={onAdd} products={products} />
      </Container>
    </>
  )
}

export default App;
