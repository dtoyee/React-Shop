import { useEffect, useState } from "react"
import Product from "./Product"

function ProductListings(props) {
    return(
        props.products.map(product => {
            return(
                <Product key={product.id} product={product} onAdd={props.onAdd} />
            )
        })
    )
}

export default ProductListings