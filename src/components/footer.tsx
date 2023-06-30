import Image from 'next/image'
import React from 'react'
import  LogoImage  from '../assets/logo.png'

export default function footer() {
  return (
    
<footer className="w-full">

    <div className="flex flex-col items-center justify-center pt-8">
      <div className="flex flex-col justify-center items-center gap-1">
      <Image src={LogoImage} width={300} height={180} alt='Logo' />
      <p>Transformando visitantes em clientes</p>
      </div>
    <div className="grid w-2/3 grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold ">Links Principais</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Home</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Ferramenta</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Preços</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contato</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold ">Cases</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Geração de Leads B2B</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Geração de Leads em Software</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Geração de Leads em imobiliária</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Cases de sucesso</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold ">Materiais</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Blog</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Parceria com Âgencias</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Guia definitivo do Marketing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Materiais Gratuitos</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold ">Siga a Leadster</h2>
            <ul className='flex gap-4'>
              <a className='bg-slate-100 rounded-full p-2' href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"   fill="#627397" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a className='bg-slate-100 rounded-full p-2' href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"   fill="#627397" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a className='bg-slate-100 rounded-full p-2' href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"   fill="#627397" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
              </a>
            </ul>
            <ul className="text-gray-500 dark:text-gray-400 font-medium pt-4">
                <li className="mb-4">
                    <a href="#" className=" hover:underline"> <strong className='text-black'>E-mail:</strong> contato@leadster.com.br</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline"> <strong className='text-black'>Telefone:</strong> (42) 98828-9851</a>
                </li>
            </ul>
        </div>
      
    </div>
    </div>

    <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-teal-900 sm:text-center">Copyright © 2015 - 2023 Todos os direitos reservados | <a className='text-sky-500' href="https://leadster.com.br/">Leadster</a>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
           <p className='text-sm'>Rua José Loureiro, 464 - Centro - Curitiba PR - CEPÇ 80010-000 | Termos de uso</p>
        </div>
      </div>
</footer>

  )
}
