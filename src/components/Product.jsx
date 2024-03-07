import {useEffect, useState } from "react";
import useShop from "../pages/ShopContext";

const Product=({product})=>{
    const {addToCart,removeFromCart,products}=useShop(product);
    const[isInCart,setIsInCart]=useState(false); 
   
    useEffect(()=>{
        const isCart=products.filter((pro)=> pro.id === product.id);
        // console.log(isCart);
        if(isCart.length > 0){
            setIsInCart(true);
        }
        else{
            setIsInCart(false);
        }
        // console.log(products)
    },[products]);
   
    const handleAddToCart=()=>{
        if(isInCart){
            removeFromCart(product);
    //    console.log(product) 
        }
        else{
            addToCart(product);
        }
        // console.log(products);  
    };
    
  
    return(
        <div className="card" style={{minHeight:"100%",
        background:`linear-gradient(rgba(0, 0 , 0, 0.1), rgba(0, 0, 0, 0.1)),
        url(${product.urlImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        }}>
            <div className="info">
                <span>{product.name}</span>
                <span>${product.price}</span>
            </div>
            <button className={`btn ${isInCart ? "btn-secondary":"btn-primary" }`}
            onClick={handleAddToCart}
            >{isInCart? "-" :"+"}</button>
        </div>
    )
}
export default Product;