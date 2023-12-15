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
  
  
  const Carosel = () => {
    const [item, setItem] = useState(0);

    function prevButton() {
      if (item === 0) {
        setItem(products.length - 1);
      } else {
        setItem(item - 1);
      }
    }

    function nextButton() {
      if (item === products.length - 1) {
        setItem(0);
      } else {
        setItem(item + 1);
      }
    }

    return (
      <div className='container'>
        <button onClick={prevButton}>Previous Button</button>
        <div className='card' style={{ width: "18rem" }}>
          <img src={products[item].image} style={{ width: "15rem" }}className='card-img-top' alt="..." />
          <div>
            <h5 className='card-title'>{products[item].name}</h5>
            <p className='card-text'>{products[item].description}</p>
          </div>
        </div>
        <button onClick={nextButton}>Next Button</button>
      </div>
    );
  };

  export default Carosel
