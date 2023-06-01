import { useEffect, useState } from "react"
import { NavDropdown } from "react-bootstrap"


function MenuCategories() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const loadCategories = async () => {
        await fetch('https://dummyjson.com/products/categories')
        .then((response) => {
            if(!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            return response.json()
        })
        .then((data) => 
            data.map(cats => {
                setCategories(categories => [...categories, cats])
            })
        ).catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        loadCategories()
        setLoading(false)
    }, [])

    if(loading) return <h2>Loading...</h2>

    return(
        categories.map((category) => {
            return (
                <NavDropdown.Item href={"/category/"+category}>{category}</NavDropdown.Item>
            )
        })
    )
}

export default MenuCategories