import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';


const Home = () => {
    const [carts, setCarts] = useState([])
    const tshirts = useLoaderData();

    const handleAddToCart = tshirt => {
        const exists = carts.find(ts=> ts._id === tshirt._id)
        if(exists){
            toast('You have already added the t-shirt')
        }
        else{
            const newCart = [...carts, tshirt];
            setCarts(newCart)
        }
    }

    const handleRemoveFromCart = id => {
        const remaining = carts.filter(ts => ts._id !== id)
        setCarts(remaining)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt =>
                        <TShirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            handleAddToCart={handleAddToCart}
                        ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;