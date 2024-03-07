import { useEffect, useState } from "react";
import useShop from "../pages/ShopContext";
import toast, { Toaster } from 'react-hot-toast';
const Payment=()=>{
    const initialPayment={
        evc:false,
        sahal:false,
        zaad:false,
    }
   const {clearCart}= useShop()
    const [paymetMethod,setPaymentMethod]=useState(initialPayment);
    const [updated,setUpdated]=useState(false);
    useEffect(()=>{},[updated])
return(
    <div>
        <h2>Pay With</h2>
        <div className="payment-cards">
        <div className={`payment-card ${paymetMethod.zaad && "selected"}`}
    onClick={()=>setPaymentMethod({...initialPayment,zaad:true})}>
            <h3>Zaad Service</h3>
    </div> 
    <div className={`payment-card ${paymetMethod.evc && "selected"}`}
    onClick={()=>setPaymentMethod({...initialPayment,evc:true})}>
            <h3>Evc Plus </h3>  
    </div> 
    <div className={`payment-card ${paymetMethod.sahal && "selected"}`}
    onClick={()=>setPaymentMethod({...initialPayment,sahal:true})}>
            <h3>Sahal</h3>
    </div>
    <form >
        <input type="text" className="form-control" placeholder="2526..."/>
        <button className="btn-proceed" onClick={()=>{toast.success('Successfully toasted!');
clearCart()}}>Proceed!</button>
    </form>
        </div>
   
    </div>
)
}
export default Payment;