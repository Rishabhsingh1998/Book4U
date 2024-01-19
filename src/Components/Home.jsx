import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function Home() {
  return (
    <>
      <div className="bg-[url('https://img.freepik.com/free-vector/realistic-book-lovers-day-horizontal-background-with-composition-text-books-with-lamp-cup-vector-illustration_1284-77302.jpg')] w-[100vw] h-[80vh] bg-cover">
      </div>

      <div className=' py-20 bg-blue-200'>
        <h1 className='text-center text-5xl font-bold '>Best Books for Kids we have</h1>
      </div>


      <div className='flex  gap-16 px-20   bg-blue-200   '>
        <div className="w-[300px] rounded-md border-black border-2">
          <img
            src="https://th.bing.com/th/id/OIP.pWRwKAb5G2x519xvMdx35AHaFj?rs=1&pid=ImgDetMain"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              Avengers Collection &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm text-blue-800">
              Collection of the superheroes like Spiderman , Thor , Ironman etc ..
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Study
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Reading
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Learn
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Explore More
            </button>
          </div>
        </div>

        {/* second */}

        <div className="w-[300px] rounded-md border-black border-2">
          <img
            src="https://www.bookywooky.in/wp-content/uploads/2019/06/IMG-20190619-WA0046.jpg"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              The Story Books &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm text-blue-800">
              A Picture story book of a naughty Kid and his mischievous ..
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Study
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Reading
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Learn
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Explore More
            </button>
          </div>
        </div>

        {/* third */}

        <div className="w-[300px] rounded-md border-black border-2">
          <img
            src="https://th.bing.com/th/id/OIP.Hm6pFeOgwxuNXSFwvdIK_gHaGi?rs=1&pid=ImgDetMain"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              GrandDad's Island &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm text-blue-800">
              A story about a GrandFather ,  his Grandson and his Island ..
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Study
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Reading
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Learn
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Explore More
            </button>
          </div>
        </div>

        {/* fourth */}


        <div className="w-[300px] rounded-md border-black border-2">
          <img
            src="https://th.bing.com/th/id/OIP.afsfz5ZXZU3Q1R61F5xl1AHaHZ?rs=1&pid=ImgDetMain"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              The Animal Stories &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-sm text-blue-800">
              A kid books to learn about Animal and their Lifestyle ..
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-black">
                #Study
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-black">
                #Reading
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-black">
                #Learn
              </span>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Explore More
            </button>
          </div>
        </div>

      </div>


      <div className='py-20 h-96  bg-blue-200'>
        <h1 className='text-6xl text-center  p-10 font-semibold'>Get Exclusive Offers on your Mail</h1>
        <input type="text" className='p-7 w-6/12 border-double border-4 border-black rounded-3xl ml-72 mr-5' />
        <button className=' rounded-3xl text-2xl   p-6 bg-black text-white w-44 hover:bg-red-600'>Subscribe</button>
      </div>

    </>
  )
}

export default Home