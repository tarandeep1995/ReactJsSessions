import React, { useEffect, useState } from 'react';

const CounterAppLifecycle = () => {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // Event handler for key press (ArrowUp)
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp') {
      // Update count when ArrowUp key is pressed
      setCount((prevVal) => prevVal + 1);
    }
  };

  useEffect(() => {
    // Effect for mounting phase (componentDidMount)

    // Log a message when the component is updated
    console.log('Counter is Updated');

    // Add event listener for keydown when the component mounts
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup function - runs on unmounting (componentWillUnmount)
    return () => {
      console.log('Counter will Unmount');

      // Removing the event listener to prevent memory leaks
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array means the effect runs only on mount and unmount

  return (
    <div>
      <p>Press "Arrow Up"</p>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default CounterAppLifecycle;

//useEffect is a hook in React that allows functional components to perform side effects. Side effects are operations that happen after the initial rendering of the component, such as data fetching, subscriptions, or manually changing the DOM. useEffect is a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

