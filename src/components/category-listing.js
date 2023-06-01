import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router"

function CategoryListing() {
    const categoryName = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        await fetch('https://dummyjson.com/products/category/'+categoryName.category)
        .then(response => response.json())
        .then(data => {
            data.products.map(product => {
                setProducts(products => [...products, product])
            })
        })
    }

    useEffect(() => {
        getProducts()
        setLoading(false)
    }, [])

    if(loading) return <h2>Loading...</h2>
    return(
        products.map(product => {
            return(
                <>
                    <Card style={{ width: '18rem', display: 'inline-block', marginLeft: '30px', marginTop: '10px' }} key={product.id}>
                        <Card.Img variant="top" src={product.thumbnail} style={{width: '18rem', height: '180px'}} />
                        <Card.Body>
                            <Card.Title>
                                <a href={'/product/'+product.id+'/'+product.title.replace(/ /g,'-')}>
                                    {product.title.substr(0, 20)}
                                </a>
                            </Card.Title>
                            <Card.Text>
                                £{product.price}
                            </Card.Text>
                            <Card.Text>
                                {(product.description.length >= 50) ? product.description.substr(0, 50)+'...' : product.description}
                            </Card.Text>
                            <Card.Text>
                                <Button variant="warning">Add to Cart</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            )
        })
    )
}

export default CategoryListing