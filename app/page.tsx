
import React from 'react'
import Headerone from './mycomponets/Headerone'
import Popolarcar from './mycomponets/Popolarcar'
import RecomdeCar from './mycomponets/RecomdeCar'
import SideBar from './mycomponets/SideBar'

const page = () => {
  return (
    <div className='bg-gray-200 overflow-x-hidden'>
     
     
      < Headerone/>
      <SideBar/>
      <Popolarcar/>
      <RecomdeCar/>
     
     
      
         {/* <div className='fixed w-[25%] top-0 left-0 bg-white h-[1000px] mx-10 mt-4'>
          <h1 className='ml-5 mt-5'>Type</h1>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p >Spots (10)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>SUV(12)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>MPV(16)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Sedan(20)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Coupe(14)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Hatchback(14)</p>
          </div>
          <h1 className='mt-10 mx-5'>CAPACITY</h1>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>2 Person(10)</p>
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>4 Person (14)</p>
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p></p>6 Person(12)
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>8 or More16()</p>
          </div>
          <h1 className='mt-10 mx-5'>Price</h1>
          <div className='h-[20px] w-[300px] bg-gray-300 mt-5 mb-10'>
            <div className='h-[20px] w-[200px] bg-blue-800'></div>
          </div>
          <h1>Max.$100.00</h1>
          

        </div>  */}
         {/* <SideBar/>  */}
{/* <Pyment/> */}
       {/* <ProductDetails/> 
       <Headerone/>
       <Popolarcar/>
       <RecomdeCar/>
       <Footer/> */}
      
    </div>
  )
}

export default page