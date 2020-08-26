import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const first10 = fakeData.slice(0, 20);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
   
    console.log(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => <Products 
                        handleAddProduct = {handleAddProduct}
                        product = {pd}></Products>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h3>this is cart</h3>
                <h5>Order summery: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;