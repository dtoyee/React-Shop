import { Button, Card } from "react-bootstrap"


function Product(props) {
    const { product, onAdd } = props
    return (
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
                        <Button onClick={() => onAdd(product)} variant="warning">Add to Cart</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
export default Product