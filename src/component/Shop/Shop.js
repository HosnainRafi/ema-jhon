import React, { useState,useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [displayProducts,setDisplayProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect( () => { 
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
        });
}, []);

useEffect(() => {
    if (products.length) {
        const savedCart = getStoredCart();
        const storedCart = [];
        for (const key in savedCart) {
            const addedProduct = products.find(product => product.key === key);
            if (addedProduct) {
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart);
    }
}, [products])

    const handleAddToCart = (product) => {
       const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }
    
    return (
        <div>
        <form className= "d-flex search-area justify-content-center align-items-center">
        <input className="form-control me-2 w-75" type="search" placeholder="Search Your Product" aria-label="Search" onChange = {handleSearch} />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
            <div>
            <div className="shop-container">
                <div className="product-container">
                {
                    displayProducts.map(product => <Product 
                        product = {product}
                        key={product.key}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                    
                }
            </div>
            <div className="cart-container">
                 <Cart cart= {cart}></Cart>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Shop;