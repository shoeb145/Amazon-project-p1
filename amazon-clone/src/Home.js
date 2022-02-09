import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            
        <div className="home--container"> 
        <img className="home--image" 
        src="https://m.media-amazon.com/images/I/71ZBHazSvIL._SX3000_.jpg" alt=""/>
        
        <div className="home--row">
        <Product 
        id="01"
        title="see u in c"
        price={450}
        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
          />
        <Product 
        id="02"
        title="
        Apple iPhone 11 (64GB) - Black"
        price={55999}
        image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
          />
        <Product 
        id="03"
        title="
        Echo (4th Gen, Black) bundle with Amazon 6A Smart Plug - Easy Set-Up"
        price={8798}
        image="https://m.media-amazon.com/images/I/61h8UN-jfqL._SL1000_.jpg"
          />
       
        
        </div>
        <div className="home--row">
        <Product 
        id="04"
        title="AmazonBasics 139cm (55 inch) 4K Ultra HD Smart LED Fire TV AB55U20PS (Black)"
        price={42999}
        image="https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg"
          />
        <Product 
        id="05"
        title="
        SanDisk Cruzer Blade 32GB USB Flash Drive"
        price={379}
        image="https://m.media-amazon.com/images/I/61DjwgS4cbL._SL1500_.jpg"
          />
        </div>
        <div className="home--row">
        <Product 
        id="06"
        title="Iconic Spiderman - Decibel Wireless On Ear Headphones"
        price={1699}
        image="https://m.media-amazon.com/images/I/51LcSENiCPL._SL1288_.jpg"
          />
        </div>
        
        </div>
        </div>
    )
}

export default Home