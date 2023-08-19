import React, { useContext } from 'react';
import './Cart.css'


const Cart = ({ carts, handleRemoveFromCart }) => {

   
    
    let message;
    if(carts.length === 0) {
        message = <p>Please add some products</p>
    }
    return (
        <div>
            <h4>Order summery:{carts.length}</h4>
            {message}
            <p className={`bold ${carts.length===3 ? 'red': 'blue'} `}>somthing</p>
            {
                carts.map(ts =>
                    <p key={ts._id}>{ts.name}<button
                        onClick={()=>handleRemoveFromCart(ts._id)}
                    >X</button></p>)
            }
            <hr />
            {/* <p>{sectionName}</p> */}
        </div>
    );
};

export default Cart;