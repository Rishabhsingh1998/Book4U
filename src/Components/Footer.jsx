import React from 'react'

function Footer() {
  return (
    <div className="mx-auto mt-1 bg-black text-white width">
        <footer className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="mt-4 grow md:ml-12 md:mt-0">
              <p className="text-base font-semibold text-red-500">
                © 2023 RBooks Copyright
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-red-400">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-red-400">Our Stores</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
                <li>Washington</li>
                <li>Amsterdam</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-red-400">Services</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
                <li>UI / UX Design</li>
                <li>App Development</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-red-400">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-red-400">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
        </div>
  )
}

export default Footer