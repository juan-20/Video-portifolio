import Image from 'next/image'
import React from 'react'
import  LogoImage  from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className='p-8'>
        <Image src={LogoImage} width={180} height={180} alt='Logo' />
    </nav>
  )
}
