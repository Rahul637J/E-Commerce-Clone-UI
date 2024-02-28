import React from 'react'

const Section = () => {
  return (
    <section className='flex gap-8 justify-center relative z-10'>
      <ul className='flex gap-12 justify-center'>
         <li className="relative group">
          <span className="cursor-pointer flex items-center">
          Electronics
            <svg
              className="ml-1 w-4 h-4 transition-transform transform group-hover:-rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <ul className="absolute hidden bg-white border shadow-md mt-2 py-2 rounded-md group-hover:block">
            <li>Subcategory 1</li>
            <li>Subcategory 2</li>
            <li>Subcategory 3</li>
          </ul>
        </li>
    
        {/* <!-- Repeat the structure for other list items --> */}
      {/* //!-------------------------------------------------------------------------------------------------------------------------------- */}
        <li className="relative group">
          <span className="cursor-pointer flex items-center">
          TV & Appliance
            <svg
              className="ml-1 w-4 h-4 transition-transform transform group-hover:-rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <ul className="absolute hidden bg-white border shadow-md mt-2 py-2 rounded-md group-hover:block">
            <li>Subcategory 1</li>
            <li>Subcategory 2</li>
            <li>Subcategory 3</li>
          </ul>
        </li>
        {/* <!-- Repeat the structure for other list items --> */}
      
        {/* //!-------------------------------------------------------------------------------------------------------------------------------- */}
    
        <li className="relative group">
          <span className="cursor-pointer flex items-center">
          Men
            <svg
              className="ml-1 w-4 h-4 transition-transform transform group-hover:-rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <ul className="absolute hidden bg-white border shadow-md mt-2 py-2 rounded-md group-hover:block">
            <li>Subcategory 1</li>
            <li>Subcategory 2</li>
            <li>Subcategory 3</li>
          </ul>
        </li>
        {/* <!-- Repeat the structure for other list items --> */}
    
        {/* //!-------------------------------------------------------------------------------------------------------------------------------- */}
    
        <li className="relative group">
          <span className="cursor-pointer flex items-center">
            Women
            <svg
              className="ml-1 w-4 h-4 transition-transform transform group-hover:-rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <ul className="absolute hidden bg-white border shadow-md mt-2 py-2 rounded-md group-hover:block">
            <li>Subcategory 1</li>
            <li>Subcategory 2</li>
            <li>Subcategory 3</li>
          </ul>
        </li>
        {/* <!-- Repeat the structure for other list items --> */}
    
        {/* //!-------------------------------------------------------------------------------------------------------------------------------- */}
    
        <li className="relative group">
          <span className="cursor-pointer flex items-center">
          Babies & Kids
            <svg
              className="ml-1 w-4 h-4 transition-transform transform group-hover:-rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <ul className="absolute hidden bg-white border shadow-md mt-2 py-2 rounded-md group-hover:block">
            <li>Subcategory 1</li>
            <li>Subcategory 2</li>
            <li>Subcategory 3</li>
          </ul>
        </li>
        {/* <!-- Repeat the structure for other list items --> */}
    
        {/* //!-------------------------------------------------------------------------------------------------------------------------------- */}
    
        <li className="relative group">
          <span className="cursor-pointer flex items-center">
          Home & Furniture
            <svg
              className="ml-1 w-4 h-4 transition-transform transform group-hover:-rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <ul className="absolute hidden bg-white border shadow-md mt-2 py-2 rounded-md group-hover:block">
            <li>Subcategory 1</li>
            <li>Subcategory 2</li>
            <li>Subcategory 3</li>
          </ul>
        </li>
        {/* <!-- Repeat the structure for other list items --> */}
        
        {/* //!-------------------------------------------------------------------------------------------------------------------------------- */}
    
        <li className="relative group">
          <span className="cursor-pointer flex items-center">
          Sports,Books & More
            <svg
              className="ml-1 w-4 h-4 transition-transform transform group-hover:-rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <ul className="absolute hidden bg-white border shadow-md mt-2 py-2 rounded-md group-hover:block">
            <li>Subcategory 1</li>
            <li>Subcategory 2</li>
            <li>Subcategory 3</li>
          </ul>
        </li>
        {/* <!-- Repeat the structure for other list items --> */}
      </ul>
      
        {/* //!-------------------------------------------------------------------------------------------------------------------------------- */}
    
    </section>
      )
}

export default Section
