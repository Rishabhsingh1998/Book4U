import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const posts = [
  {
    category: 'Literature Books',
    prize: '$25',
    description: 'Learn how to showcase your design skills and stand out in a crowded job market.',
    author: 'Emily Lee',
    amount: '1',
    avatar: 'https://cdn.britannica.com/99/220799-050-8E06F837/American-author-James-Patterson.jpg',
    poster:
      'https://th.bing.com/th/id/R.ead26cc0a71fca2c58fc96a3856dd521?rik=HKMIJNA92H8%2bsw&riu=http%3a%2f%2fwww.brainpickings.org%2fwp-content%2fuploads%2f2012%2f01%2fbooks.jpg&ehk=E9yweiE3D%2bcqETILmfhiLsTshjXlfla9U2bxKK2%2bSj4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
  },
  {
    category: 'Literature Books',
    prize: '$26',
    description:
      'Discover the latest trends and techniques that will shape the future development.',
    author: 'John Smith',
  amount: '1',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    poster:
      './src/img/indian1.jpg',
  },
  {
    category: 'Business',
    prize: '$33',
    description:
      'Learn the essential steps to launch a successful startup and make your dreams a reality.',
    author: 'Sarah Brown',
    amount: '1',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    poster:
      './src/img/indian3.jpg',
  },
  {
    category: 'Health',
    prize: '$30',
    description:
      'Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.',
    author: 'David Kim',
    amount: '1',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    poster:
      'https://wallpapercave.com/wp/wp2036901.jpg',
  },
  {
    category: 'Education',
    prize: '$27',
    description:
      'Explore the benefits of learning a second language and how it can improve your cognitive abilities.',
    author: 'Maria Rodriguez',
    date: '22 March 2009',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    poster:
      'https://th.bing.com/th/id/OIP.68WkgQPhHFngUNUxwSEoDwHaEo?rs=1&pid=ImgDetMain',
  },
  {
    category: 'Travel',
    prize: '$29',
    description: 'Discover the top destinations in Europe and plan your dream vacation.',
    author: 'Alex Johnson',
    date: '19 March 2002',
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
    poster:
      'https://th.bing.com/th/id/OIP.WqBhFeiW9yQMkcKntSdpIgHaFa?rs=1&pid=ImgDetMain',
  },
  {
    category: 'Food',
    prize: '$28',
    description:
      'Learn the secrets to making the perfect living style and impress your friends and family.',
    author: 'Thomas Lee',
    amount: '1',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    poster:
      'https://th.bing.com/th/id/OIP.JKTSHZucrlPAX8bCVIRuegHaE3?w=270&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
  },
  {
    category: 'Fashion',
    prize: '$20',
    description:
      'Book to know about the living of a Kshatriya',
    author: 'Jessica Kim',
    amount: '1',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    poster:
      'https://th.bing.com/th/id/OIP.qH1gT-W6YVex2xz3zp21aQHaEh?w=299&h=183&c=7&r=0&o=5&dpr=1.4&pid=1.7',
  },
  {
    category: 'Sports',
    prize: '$22',
    description:
      'Book to Learn how practicing yoga can improve your athletic performance and prevent injuries.',
    author: 'Michael Johnson',
    amount: '1',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    poster:
      'https://th.bing.com/th/id/OIP.v6xD7pogsKSMAEr2wQJuVwHaE7?w=284&h=188&c=7&r=0&o=5&dpr=1.4&pid=1.7',
  },
]

export default function Blog() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const additem = () => {
    val = val+1
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='bg-gradient-to-r from-indigo-200 from-10% via-sky-100 via-30% to-emerald-100 to-90%'>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-black md:text-5xl md:leading-10">
            Books We Have
          </p>
          <p className="max-w-4xl text-base text-black md:text-xl">
            All category books available , you can find here all book u need at cheap prize .
          </p>
          <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search Books"
            ></input>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end">
            {['Latest', 'Religious', 'Mythology', 'History'].map(
              (filter, index) => (
                <div
                  className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-black first:border-b-2 first:border-black"
                  key={filter}
                >
                  {filter}
                </div>
              )
            )}
          </div>
        </div>
        {/* posts */}
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.prize} className="border-b border-black" >
              <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
              <div className="min-h-min p-3">



                <Link to="/Blog" >
                <button className='bg-black text-white p-3 rounded-2xl' onClick={additem}> Add to Cart </button>
                </Link>




                <p className="mt-4 w-full text-xs font-semibold leading-tight text-black">
                  #{post.category}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold text-black">{post.prize}</p>
                <p className="mt-4 w-full text-sm leading-normal text-black">
                  {post.description}
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <img className="h-full w-10 rounded-lg" src={post.avatar} alt={post.author} />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-black">
                      {post.author}
                    </p>
                    <p className="text-sm leading-tight text-black">{post.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block mb-5">
              <p>
                <strong>Best</strong> <strong>books</strong> <strong>of</strong>  <strong>2023</strong>
              </p>
            </div>
            <div className="space-x-2 mb-5">

              <Link to="/Home">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              </Link>


              <Link to="/Novels">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View More &rarr;
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
