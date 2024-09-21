import { useState } from "react";

function ProductList(){

    var [productList,setProductList] = useState([]);

    setTimeout(() =>{
        setProductList(
            productList = [
            {name : "product1 Name",price: 20.0},
            {name: "product2 Name",price: 30}
        ]);
    },5000)
    
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