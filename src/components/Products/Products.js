import React from 'react';

const Products = (props) => {
    console.log(props.product.name);
    return (
        <div>
            <h3>{props.product.name}</h3>
        </div>
    );
};

export default Products;