import React,{ useEffect, useState} from "react";

function Products(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/products/api')
        .then(response => response.json())
        .then(products => {
            console.log(products)
            setProducts(products)})
        .catch(error => console.log(error))
    },
    [])
}

export default Products;