import Image from 'next/image'
import React from 'react'
import assetTitle from '../assets/asset-header.png'

export default function Hero() {
  return (
    <div className='bg-sky-50 w-full h-auto flex flex-col items-center justify-center p-40 text-center'>
        <div className="flex flex-col justify-center items-center gap-8">
            <p className='border-2 border-sky-500 text-sky-500 uppercase pr-4 pl-4 pt-1 pb-1 rounded-t-full rounded-r-full font-bold w-60'>webinars exclusivos</p>
            <div className="title relative">
            <h1 className="flex flex-col text-gray-700 items-center text-3xl md:text-5xl border-b-2 border-slate-300 pb-8">
                Menos conversinha,
                <span className='text-transparent bg-clip-text bg-gradient-to-l from-[#2c83fb] to-[#1F76F0] font-bold text-5xl md:text-7xl'>Mais conversão</span>
            </h1>
            <Image className='absolute bottom-20 -right-6' src={assetTitle} alt='text' width={40} height={40} />
            </div>
            <p>Conheça as estratégias que 
                <span className='font-bold'> mudaram o jogo </span>
                e como aplicá-las no seu negócio</p>
            </div>

    </div>
  )
}
