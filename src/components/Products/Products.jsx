import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Img1 from '../../assets/category/glouse/X001.jpg';
import Img2 from '../../assets/category/glouse/X002.jpg';
import Img3 from '../../assets/category/glouse/X003.jpg';
import Img4 from '../../assets/category/glouse/X004.jpg';
import Img5 from '../../assets/category/glouse/X005.jpg';
import Img6 from '../../assets/category/glouse/X006.jpg';

const ProdutcsData =[
  {
    id:1,
    img:Img1,
    title:"Hand Glouse",
    price:"LKR 1200/=",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img2,
    title:"Hand Glouse",
    price:"LKR 1200/=",
    aosDelay:"0",
  },
  {
    id:3,
    img:Img3,
    title:"Hand Glouse",
    price:"LKR 1200/=",
    aosDelay:"0",
  },
  {
    id:4,
    img:Img4,
    title:"Hand Glouse",
    price:"LKR 1200/=",
    aosDelay:"0",
  },
  
]
const ProdutcsData2 =[
  {
    id:1,
    img:Img5,
    title:"Hand Glouse",
    price:"LKR 1200/=",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img6,
    title:"Hand Glouse",
    price:"LKR 1200/=",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img5,
    title:"Hand Glouse",
    price:"LKR 1200/=",
    aosDelay:"0",
  },
  {
    id:3,
    img:Img1,
    title:"Hand Glouse",
    price:"LKR 1200/=",
    aosDelay:"0",
  },
  
]
const Products = () => {
  return (
    <div>
        <div className="container">
            {/**Header section */}
            <Heading title="Our Products"
            subtitle={"Explore Our Products"}/>
            {/**Body section */}
            <ProductCard data={ProdutcsData}/>
            <ProductCard data={ProdutcsData2}/>
        </div>
        
    </div>
  )
}

export default Products