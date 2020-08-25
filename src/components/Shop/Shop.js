import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
   
    console.log(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => <Products product = {pd}></Products>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

export default Shop;