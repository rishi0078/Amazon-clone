import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
          
    <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
        
        
        {/*Product id,tittle,price,rating,image */}
        <div className="home_row">
        <Product 
            id="12321341"
            title="The lean startup:How constant innovation creates Radically Successful business Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product 
            id="12321341"
            title="The lean startup:How constant innovation creates Radically Successful business Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
        />
        </div>
        
        <div className="home_row">
        <Product 
            id="12321341"
            title="The lean startup:How constant innovation creates Radically Successful business Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product 
            id="12321341"
            title="The lean startup:How constant innovation creates Radically Successful business Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product 
            id="12321341"
            title="The lean startup:How constant innovation creates Radically Successful business Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
        />

        
        </div>
        <div className="home_row">


        <Product 
            id="12321341"
            title="The lean startup:How constant innovation creates Radically Successful business Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
        />

        </div>

        {/*Product */}

        
        </div>


       

    );

}

export default Home;
