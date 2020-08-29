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
          id="1"
          title="Himalayan Delight Timur ko Chop"
          price={1100}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/1968/5547/products/HDshrimpchhop_medium@2x.progressive.jpg?v=1597031370"

        />
         <Product
          id="2"
          title="Tokla Gold Tea"
          price={1300}
          rating={4}
          image="https://cdn.shopify.com/s/files/1/1968/5547/products/tokla-Gold_medium@2x.progressive.jpg?v=1598500415"

        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={1110}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IQzkj0+NL.jpg"

        />
         <Product
          id="123"
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
          price={550}
          rating={4}
          image="https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY218_.jpg"

        />
        <Product
          id="123"
          title="Start with Why: How Great Leaders Inspire Everyone to Take Action"
          price={800}
          rating={4}
          image="https://m.media-amazon.com/images/I/71QUhm-AnIL._AC_UY218_.jpg"

        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
          price={32607}
          rating={5}
          image="https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UL320_.jpg"

        />
      </div>

    </div>
  )
}

export default Home
