"use client"
import Link from 'next/link'


function Header() {

  return (
    <header className="flex items-center justify-between">
      <div className="logo float-left">Logo</div>
      <nav className="hidden lg:block justify-center">
        <ul className="flex space-x-4 " >
          <li className="text-gray-700 hover:text-gray-900">
            <Link href="/">
             Home
            </Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900">
            <Link href="/about">
              <h1>About</h1> 
            </Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900">
            <Link href="/services">
         Services
            </Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900">
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header