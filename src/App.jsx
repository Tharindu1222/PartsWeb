import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import hoodie from "./assets/images/hoodieoffer.png";
import Products from "./components/Products/Products";
import ProductCard from "./components/Products/ProductCard";
import banner2 from "./assets/images/Banner/agv.png";
import Partners from "./components/Partners/Partners";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

const BannerData={
    discount:"20% OFF",
    title:"Fine Smile",
    date:"Aug 01 to Aug 30",
    image:hoodie,
    title2:"Ride Your Safe",
    title3:"Winter Sale",
    title4:"Select from stylish hoodies all featuring a unique design inspired by TD STORE",
    bgColor:"#f42c37",
};

const BannerData2={
    discount:"30% OFF",
    title:"Happy Hours",
    date:"Aug 15 to Sep 30",
    image:banner2,
    title2:"Ride Your Safe",
    title3:"Winter Sale",
    title4:"Select from stylish Helmet all featuring a unique design inspired by TD STORE",
    bgColor:"#2dcc6f",
};


const App = () => {
return <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    <Navbar />
    <Hero/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data={BannerData}/>
    <Products/>
    <Banner data={BannerData2}/>
    <Partners/>
    <Footer/>
</div>;
}
export default App;
