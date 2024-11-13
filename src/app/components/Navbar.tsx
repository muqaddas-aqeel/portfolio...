import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='bg-[rgb(11,17,22)] z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <Image  src={require("../../../public/logo pic/pic.jpeg")} alt="logo pic" width={100} height={100}  />
      <span className="ml-3 text-xl">Muqaddas's Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
      <Link href={"/"} className="mr-5 hover:text-[#0cc4c4]">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-[#0cc4c4]">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-[#0cc4c4]">skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-[#0cc4c4]">projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-[#0cc4c4]">Contact</Link>
    </nav>
    <button className="inline-flex text-white items-center bg-[#0cc4c4] border-0 py-1 px-3 focus:outline-none hover:bg-[#183131] rounded text-base mt-4 md:mt-0">
      Download
      <FaCloudDownloadAlt />
    </button>
  </div>
</header>

      
    </div>
  )
}

export default Navbar
