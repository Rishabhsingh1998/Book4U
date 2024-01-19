import React from 'react'
import { Link } from 'react-router-dom'


function Cart() {
  return (
    <div className='w-full  '>
      <div>
        <h1 className='text-4xl font-semibold text-center py-5'> .. Continue Shopping ..</h1>  
        <hr className='' />
      </div>

      <div className='flex justify-between mt-10'>
        <h1 className='text-2xl px-20 '>Your Cart Items </h1>
        <div className='absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mr-20 hover:cursor-pointer'>
              <Link to="/Cart"><img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/512/3008/3008395.png" alt="" /></Link>
              <p className='-mt-6'>0</p>
              </div>
      </div>

      <div className='flex gap-48 justify-center mt-20 '>
        <div className='w-48 h-48'>
          <img src="https://th.bing.com/th/id/OIP.WqBhFeiW9yQMkcKntSdpIgHaFa?rs=1&pid=ImgDetMain" alt="" />
        </div>

        <div>
          <h1>Books</h1>
          <p>Literature book to learn</p>
        </div>

        <div className='flex gap-5'>
        <i class="fa-solid fa-plus"></i>
        <p className='-mt-2 text-lg'>1</p>
        <i class="fa-solid fa-minus"></i>
        </div>

        <div>
          <p>$2000</p>
        </div>

        <div>
        <i class="fa-solid fa-trash-can"></i>
        </div>

      </div>

      {/* second */}

      <div className='flex gap-48 justify-center mt-20 '>
        <div className='w-48 h-48'>
          <img src="https://th.bing.com/th/id/OIP.WqBhFeiW9yQMkcKntSdpIgHaFa?rs=1&pid=ImgDetMain" alt="" />
        </div>

        <div>
          <h1>Books</h1>
          <p>Literature book to learn</p>
        </div>

        <div className='flex gap-5'>
        <i class="fa-solid fa-plus"></i>
        <p className='-mt-2 text-lg'>1</p>
        <i class="fa-solid fa-minus"></i>
        </div>

        <div>
          <p>$2000</p>
        </div>

        <div>
        <i class="fa-solid fa-trash-can"></i>
        </div>

      </div>

{/* third */}

<div className='flex gap-48 justify-center mt-20 '>
        <div className='w-48 h-48'>
          <img src="https://th.bing.com/th/id/OIP.WqBhFeiW9yQMkcKntSdpIgHaFa?rs=1&pid=ImgDetMain" alt="" />
        </div>

        <div>
          <h1>Books</h1>
          <p>Literature book to learn</p>
        </div>

        <div className='flex gap-5'>
        <i class="fa-solid fa-plus"></i>
        <p className='-mt-2 text-lg'>1</p>
        <i class="fa-solid fa-minus"></i>
        </div>

        <div>
          <p>$2000</p>
        </div>

        <div>
        <i class="fa-solid fa-trash-can"></i>
        </div>

      </div>

      <div className=''>
        <h1>cart total :-  $22000</h1>
        <button className='bg-blue-600 p-3'>Check Out</button>
      </div>




    </div>
  )
}

export default Cart