import Menu from "./menu"

function Navbar(props) {
    return(
        <Menu cartItems={props.cartItems} onAdd={props.onAdd}/>
    )
}

export default Navbar