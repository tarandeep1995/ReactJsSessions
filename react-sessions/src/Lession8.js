import React, { useState,useEffect } from 'react';

// Sample data for items
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
  // State to manage the cart items
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Initialize the cart with items from exampleItem and set quantity to 0
    const initialCart = exampleItem.map((item) => ({ ...item, quantity: 0 }));
    setCart(initialCart);
  }, []); // Empty dependency array ensures this effect runs only once on mount


  // Function to add an item to the cart
  function addToCart(item) {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  }

  // Function to calculate the total cost of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Display the items in the cart */}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} * {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      {/* Buttons to add items to the cart */}
      <div>
        {exampleItem.map((item) => (
          <button key={item.id} onClick={() => addToCart(item)}>
            Add {item.name}
          </button>
        ))}
      </div>
      {/* Display the total cost of items in the cart */}
      <h2>TOTAL COST: ${(calculateTotal()).toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;
