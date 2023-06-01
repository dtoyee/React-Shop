import { BasketFill } from 'react-bootstrap-icons';

function BasketIcon(props) {
    return (
        <>
            <div style={{color: 'white', marginRight: '10px'}}>
                {props.cartItems.length === 0 ? 0 : props.cartItems.length}
            </div>
            <BasketFill color='white'/>
        </>
    )
}

export default BasketIcon