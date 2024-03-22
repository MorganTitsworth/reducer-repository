import React from 'react';
import { useCart } from './CartContext';
import './ProductList.css'; // Import ProductList.css

const ProductList = () => {
  const { dispatch } = useCart();

  const products = [
    { id: 1, name: 'Sneakers', price: 25, image: 'https://i.pinimg.com/originals/2d/81/69/2d8169059eaa219df13b70de2b33676a.jpg' },
    { id: 2, name: 'Sweater', price: 15, image: 'https://static.vecteezy.com/system/resources/previews/011/517/187/original/cozy-warm-orange-sweater-knitted-warm-clothing-in-cartoon-flat-style-art-isolated-on-a-white-background-vector.jpg' },
    { id: 3, name: 'Jeans', price: 20, image: 'https://t3.ftcdn.net/jpg/01/12/56/00/360_F_112560054_CH8nKMBnaZEbrBcp93Kh9MnwmWO8FWMI.jpg' },
  ];

  const handleAddToCart = product => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div className="product-info">
              <img src={product.image} alt={product.name} />
              <div>
                <div>{product.name}</div>
                <div>${product.price}</div>
              </div>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
