import { useLocation, useNavigate } from "react-router"
import Navbar from "./navbar"
import { Container, Table } from "react-bootstrap"
import { PlusCircle, DashCircle } from "react-bootstrap-icons"

function Basket() {
    const location = useLocation()
    const cartItems = location.state.cartItems
    const onAdd = location.state.onAdd
    return(
        <>
            {console.log(location.state)}
            <Navbar cartItems={cartItems} />
            <Container style={{marginTop: "20px"}}>                
                <h2 style={{marginTop: "20px"}}>Cart</h2><hr></hr>

                <Table striped bordered hover>
                    <thead className="text-center">
                        <tr>
                            <th>Img</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            cartItems.map(item => {
                                return(
                                    <>
                                        <tr>
                                            <td><img src={item.thumbnail} style={{ width: "50px", height: "50px" }} /></td>
                                            <td>{item.title}</td>
                                            <td><DashCircle onClick={() => onAdd(item)} style={{ cursor: "pointer" }} /> {item.qty} <PlusCircle style={{ cursor: "pointer" }} /></td>
                                            <td>£{item.price}</td>
                                            <td>£{item.qty * item.price}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Basket