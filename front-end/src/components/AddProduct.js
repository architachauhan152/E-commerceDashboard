import React,{useState} from "react";

const AddProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("")
    const [category, setCategory]=useState("");
    const [company, setCompany]=useState("");
    const [error, setError]=useState(false)
    const Addproduct=async () =>{
        console.log(name, price, category, company);
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        let userId=JSON.parse(localStorage.getItem('user'))._id
        let result=await fetch('http://localhost:5000/add-product', {
            method:"post",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            }

            


        })
        result=await result.json()
        console.log(result)


    }

    return (
        <div className="product">
            <h1>Add Product</h1>
            <input className="inputfield" type="text" placeholder="Enter product name" value={name} onChange={(e)=>setName(e.target.value)}/>
            {error && !name && <span className="error-msg">product name is required</span>}
            <input className="inputfield" type="text" placeholder="Enter product price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            {error && !price && <span className="error-msg">price is required</span>}

            <input className="inputfield" type="text" placeholder="Enter product category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            {error && !category && <span className="error-msg">category name is required</span>}

            <input className="inputfield" type="text" placeholder="Enter product company" value={company} onChange={(e)=>setCompany(e.target.value)}/>
            {error && !company && <span className="error-msg">company name is required</span>}

            <button className="add-btn" onClick={Addproduct}>Add Product</button>
            

        </div>
    )
}
export default AddProduct;
