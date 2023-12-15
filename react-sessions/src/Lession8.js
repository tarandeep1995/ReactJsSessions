import React, { useState } from 'react';

const exampleItem = [
  {
    id: 1,
    name: "Item 1",
    price: 200.344,
  },
  {
    id: 2,
    name: "Item 2",
    price: 300.432,
  },
  {
    id: 3,
    name: "Item 3",
    price: 500.432,
  },
  {
    id: 4,
    name: "Item 4",
    price: 700.203,
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  }

  const calculateTotal=()=>{
    return cart.reduce((total,item)=> total+item.price*item.quantity,0)
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}*{item.quantity}=${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <div>
        {exampleItem.map((item) => (
          <button key={item.id} onClick={() => addToCart(item)}>
            Add {item.name}
          </button>
        ))}
      </div>
      <h2>TOTAL COST: ${(calculateTotal()).toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;
