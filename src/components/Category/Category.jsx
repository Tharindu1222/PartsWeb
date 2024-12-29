import React from 'react'
import Image1 from "../../assets/category/shoes.png";
import Image2 from "../../assets/category/helmet.png";
import Image3 from "../../assets/category/hoodie.png";
import Image4 from "../../assets/category/tyre.png";
import Image5 from "../../assets/category/glous.png";
import Image6 from "../../assets/category/zetaa.png";
import Image7 from "../../assets/category/exhoust.png";
import Button from '../Shared/Button';


const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/*First col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-black 90 to-black/70 
                text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>SOUND</p>
                            <Button text="Browse"
                            bgColor="bg-primary"
                            textColor="text-white"/>
                        </div>
                    </div>
                    <img src={Image7} alt='' className='w-[220px] absolute top-0 right-0'/>
                </div>

                {/*second col */}

                <div className='py-10 pl-5 bg-gradient-to-br from-blue-900 to-blue-600/70 
                text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Save</p>
                            <p className='text-2xl font-semibold mb-[2px]'>The</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-2'>HEAD</p>
                            <Button text="Browse"
                            bgColor="bg-white"
                            textColor="text-blue-900"/>
                        </div>
                    </div>
                    <img src={Image2} alt='' className='w-[250px] absolute top-4 right-0'/>
                </div>

                {/*third col */}

                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/70 
                text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Stylish</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Your</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-2'>OWN FASSION</p>
                            <Button text="Browse"
                            bgColor="bg-white"
                            textColor="text-primary"/>
                        </div>
                    </div>
                    <img src={Image3} alt='' className='w-[232.5px] absolute bottom-0 left-1/2 transform-translate-x-1/2 right-0' />

                </div>

            </div>

        </div>
    </div>
  )
}

export default Category