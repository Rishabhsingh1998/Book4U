import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ProductList() {

    const [product , setProducts] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        try{
            let res = await axios.get('https://api.escuelajs.co/api/v1/products')
            setProducts(res.data)
        }
        catch(error){
            console.error("Error occur in the code")
        }
    }
  return (
    <div>
        <h1>Product List</h1>

        <ul>
            { 
                product.map(product=>(

                    <li key={product.id}>
                        <img src={product.images} alt={product.name} />
                        <p>{product.name}</p>
                    </li>
    
                ))
            }
        </ul>
    </div>
  )
}

export default ProductList