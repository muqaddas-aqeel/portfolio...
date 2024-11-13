import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image  src={require("../../../public/logo pic/pic.jpeg")} alt="logo pic" width={100} height={100}  />
      <span className="ml-3 text-xl">Muqaddas's Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"#"} className="mr-5 hover:text-gray-900">About</Link>
      <Link href={"#"} className="mr-5 hover:text-gray-900">skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-gray-900">projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Download
      <FaCloudDownloadAlt />
    </button>
  </div>
</header>

      
    </div>
  )
}

export default Navbar
