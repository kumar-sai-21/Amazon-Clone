import React from 'react'
import './Product.css';

function Product({id,title,subtitle,image,price,rating}) {
    return (
        <div className="product">
             <div className="Product_info">
                <p><strong><>{title}</></strong></p>
                <p><>{subtitle}</></p>
                <p className="product_price">
                    <strong><h2>{price}</h2></strong> 
                </p>
                <div className="product_rating">
                {Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <p>⭐</p>
                    ))}
                
                </div>
             </div>

             <img src={image}
             alt=""
             />
             <button><strong><h3>Add to Basket</h3></strong> </button>
        </div>
    )
}

export default Product
