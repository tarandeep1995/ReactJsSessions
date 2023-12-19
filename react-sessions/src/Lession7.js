import React, { useState } from 'react'

       const products = [
      {
        name: "Product 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg",
      },
      {
        name: "Product 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302252.jpg",
      },
      {
        name: "Product 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302253.jpg",
      },
      {
        name: "Product 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302254.jpg",
      },
      {
        name: "Product 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302255.jpg",
      },
      {
        name: "Product 6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302256.jpg",
      },
      {
        name: "Product 7",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302257.jpg",
      },
      {
        name: "Product 8",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302261.jpg",
      },
      {
        name: "Product 9",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302259.jpg",
      },
      {
        name: "Product 10",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        image: "https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302260.jpg",
      },
    ];
  
    const Carousel = () => {
      // State to keep track of the current item index
      const [item, setItem] = useState(0);
    
      // Function to handle the "Previous" button click
      function prevButton() {
        // Check if the current item is the first item
        if (item === 0) {
          // If yes, set the item to the last item in the array
          setItem(products.length - 1);
        } else {
          // If not, decrease the item index by 1
          setItem(item - 1);
        }
      }
    
      // Function to handle the "Next" button click
      function nextButton() {
        // Check if the current item is the last item
        if (item === products.length - 1) {
          // If yes, set the item to the first item in the array
          setItem(0);
        } else {
          // If not, increase the item index by 1
          setItem(item + 1);
        }
      }
    
      // Render the Carousel component
      return (
        <div className='container'>
          {/* "Previous" button with onClick handler */}
          <button onClick={prevButton}>Previous Button</button>
    
          {/* Display the current product using the item index */}
          <div className='card' style={{ width: "18rem" }}>
            <img src={products[item].image} style={{ width: "15rem" }} className='card-img-top' alt="..." />
            <div>
              {/* Product name and description */}
              <h5 className='card-title'>{products[item].name}</h5>
              <p className='card-text'>{products[item].description}</p>
            </div>
          </div>
    
          {/* "Next" button with onClick handler */}
          <button onClick={nextButton}>Next Button</button>
        </div>
      );
    };
    
    // Export the Carousel component as the default export
    export default Carousel;