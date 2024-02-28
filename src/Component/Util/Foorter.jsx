import React from 'react'

const Foorter = () => {
  return (
    <div className='h-96 w-full flex-row bg-orange-500 text-white '>
      {/*//! SECTION-1 */}
      <section className='flex h-80 w-full border-b-2 px-8 pt-5'>
        <div className='flex  w-2/4 gap-8 border-r-1'>
          <div>
            {/* //*About */}
            <ul className='flex-row gap-5'>
              <li className='text-orange-200'>ABOUT</li>
              <br />
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>RJ Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
              
            </ul>
          </div>
          <div>
            {/* //* GROUP COMPANY*/}
            <ul className='flex-row gap-5'>
              <li className='text-orange-200'>GROUP COMPANY</li>
              <br />
              <li>Myntra</li>
              <li>Flipkart Wholesale</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>
          <div>
            {/* //*HELP */}
            <ul className='flex-row gap-5'>
              <li className='text-orange-200'>HELP</li>
              <br />
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringment</li>
            </ul>
          </div>
          <div>
            {/* //*CONSUMER POLICY */}
            <ul className='flex-row gap-5'>
              <li className='text-orange-200'>COMPANY POLICY</li>
              <br />
              <li>Cancellation & Returns</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='flex-row gap-10'>
            {/* //*MAIL US */}
            <div className='flex-row '>
              <ul>
                <li className='text-orange-200'>Mail Us</li>
                <br />
                <li>Flipkart Internet Private Limited,
                <br />
                    Buildings Alyssa, Begonia &
                    <br />
                    Clove Embassy Tech Village,
                    <br />
                    Outer Ring Road, Devarabeesanahalli Village,
                    <br />
                    Bengaluru, 560103,
                    <br />
                    Karnataka, India</li>
              </ul>
            </div>
            {/* //* ICONS */}
            <div>
              <ul className='flex gap-3'>
                <li><i className="fa-brands fa-square-instagram"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-solid fa-phone"></i></li>
              </ul>
            </div>
            </div>

          <div>
            <ul>
              <li className='text-orange-200'>Registered Office Address:</li>
              <br />
              <li>Flipkart Internet Private Limited,
                <br />
                  Buildings Alyssa, Begonia &
                  <br />
                  Clove Embassy Tech Village,
                  <br />
                  Outer Ring Road, Devarabeesanahalli Village,
                  <br />
                  Bengaluru, 560103,
                  <br />
                  Karnataka, India
                  <br />
                  CIN : U51109KA2012PTC066107
                  <br />
                  Telephone: 044-45614700</li>
            </ul>
          </div>
        </div>
      </section>

      {/* //! SECTION-2 */}
      <section className='h-1 w-full flex justify-center pt-6 '>
        <ul className='flex gap-24'>
          <li><i className="fa-solid fa-shop"></i> Become a Seller</li>
          <li><i className="fa-regular fa-star"></i>Advertise</li>
          <li><i className="fa-solid fa-gift"></i> Gift Cards</li>
          <li><i className="fa-brands fa-hire-a-helper"></i>Help Center</li>
          <li><i className="fa-regular fa-copyright"></i>2007-2024 Flipkart.com</li>
          {/* <li><img src="\src\Component\Images\footer_image.jpg" alt="img"/></li> */}
        </ul>
      </section>
    </div>
  )
}

export default Foorter
