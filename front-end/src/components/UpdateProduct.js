import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
 const UpdateProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("")
    const [category, setCategory]=useState("");
    const [company, setCompany]=useState("");
    const params=useParams();
    useEffect(()=>{
        console.log(params)
        getProductDetail()

    },[])
    const getProductDetail=async ()=>{
        let res=await fetch(`http://localhost:5000/product/${params.id}`)
        res=await res.json()
        console.log(res)
        setName(res.name)
        setPrice(res.price)
        setCategory(res.category)
        setCompany(res.company)

    }
    const Updateproduct= () =>{
        console.log(name, price, category, company);
    }


    return(
        <div className="product">
            <h1>Update Product</h1>
            <input className="inputfield" type="text" placeholder="Enter product name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className="inputfield" type="text" placeholder="Enter product price" value={price} onChange={(e)=>setPrice(e.target.value)}/>

            <input className="inputfield" type="text" placeholder="Enter product category" value={category} onChange={(e)=>setCategory(e.target.value)}/>

            <input className="inputfield" type="text" placeholder="Enter product company" value={company} onChange={(e)=>setCompany(e.target.value)}/>

            <button className="add-btn" onClick={Updateproduct}>Update Product</button>

        </div>
    )
 }
 export default UpdateProduct;