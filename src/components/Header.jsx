import React from 'react'
import { CgDarkMode } from 'react-icons/cg'
import logo from '../assets/Logo.png'

const Header = () => {
  return (
		<div className='flex justify-between items-center px-5 py-1 shadow-md static top-0'>
			<img className='w-14' src={logo} alt="logo" />
			<CgDarkMode />
		</div>
	);
}

export default Header
