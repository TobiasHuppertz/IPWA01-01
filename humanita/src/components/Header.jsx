import { Link } from 'react-router-dom';
import { useState } from 'react';
import { navbar } from '../constants';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="../" className="flex items-center space-x-3">
          <img src="../src/assets/humanita_logo.svg" alt="Logo Humanita" className="h-10" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Humanita</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <Link to="./forms/spende">
            <button type="button"
              className="text-white font-SourceSans bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center">
              Spenden
            </button>
          </Link>
          <button onClick={toggleMenu} aria-expanded={isOpen} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"> 
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navbar.map((item) => (
              <li key={item.id}>
                <Link to={item.url} onClick={() => setIsOpen(false)} className="block py-2 px-3 font-SourceSans text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
