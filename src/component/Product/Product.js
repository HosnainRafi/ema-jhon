import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {name,star,price,stock,img,seller,shipping} = props.product;
    // console.log(props);

    return (
        <div className = "product">
            <img src={img} height= "200px" alt="" />
            <div>
            <h5 className="product-name">{name}</h5>
            <p><small>By:{seller}</small></p>
            <h5 className= "price-color">Price: {price}$</h5>
            <h6>Shipping Cost : {shipping}</h6>
            <h6 className= "stock-color">only {stock} left in stock - order soon</h6>
            <Rating className= "icon-color"
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                    ></Rating>
                
                <br />
            <button className="regular-btn" onClick = {() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;