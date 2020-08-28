import React from 'react';
import '../css/Home.css';

import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="img/banner3.jpg" alt="banner" />


      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123"
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"

        />
         <Product
          id="123"
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"

        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"

        />
         <Product
          id="123"
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"

        />
        <Product
          id="123"
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"

        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"

        />
      </div>

    </div>
  )
}

export default Home
