import React from 'react'
import logo from '/images/Logo.png'

const Navbar = () => {

  const menu = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'About', link: '/about' },
    { name: 'Contacts', link: '/contacts' },
    { name: 'Journal', link: '/journal' },
  ]
  return (
    <>
      <nav className="w-full ">
        <div className="max-w-container mx-auto  grid grid-cols-3 justify-between items-center ">
          <img src={logo} className='py-8' alt="" />

          <div>
            <ul className='flex items-center gap-10 '>
              {menu.map((item, index) => (
                <li key={index} className='font-sansRegular hover:font-sansBold font-sm text-[#767676] hover:text-[#262626] cursor-pointer'><a href={item.link}>{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end gap-5">
            <button className='font-sansRegular hover:font-sansBold font-sm text-[#767676] hover:text-[#262626] cursor-pointer'>
              EN
            </button>
            <button className='font-sansRegular hover:font-sansBold font-sm text-[#767676] hover:text-[#262626] cursor-pointer'>
              RU
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar