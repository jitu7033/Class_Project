import { useEffect, useState } from "react";

function ProductList(){
    
    const [productList,setProductList] = useState([]);

    // component re-render 
    useEffect(()=>{
        console.log("component is re-render ");
    })
    
    // componentn initial render 
    useEffect(()=>{

    },[])

    // based on do this dependency update 
    useEffect(()=>{
        console.log("jitendra ")
    },[productList])

    setTimeout(() =>{
        setProductList(
        [
            {name : "product1 Name",price: 20.0},
            {name: "product2 Name",price: 30},
            {name: "product3",price : 1001}
        ]);
    },1000)

    return (<div>
        <table style={{border:'2px solid green'}}>
            <thead>
                <th>Product Name</th>
                <th>Product Price</th>
            </thead>
            <tbody>
                {productList.map((item,index)=>{
                    return (
                        <tr key = {index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    );
}

export default ProductList