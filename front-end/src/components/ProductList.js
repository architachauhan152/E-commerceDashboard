import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    };
    const deleteproduct= async (id)=>{
        let result=await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete"
    })
    result=await result.json();
    if(result){
        getProducts()
    }
    }

    return (
        <div className="productlist">
            <h1>Product List</h1>
            <ul>
                <li>Serial N.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                {/* <li>Company</li> */}
                <li>Opration</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        {/* <li>{item.company}</li> */}
                        <li><button style={{}} onClick={()=>deleteproduct(item._id)}>Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link>
                        
                        </li>

                        </ul>

                )
            }
            


        </div>
    )
}

export default ProductList;
