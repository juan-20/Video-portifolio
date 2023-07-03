import React from 'react'
import Image from 'next/image'

import graphImage from '../assets/comparativo_img_CTA.png'
import seloRD from '../assets/selo_RD.png'
import noCard from '../assets/no-card-dark.webp'
import raring from '../assets/rating.webp'

export default function GraphHero() {
  return (
    <section className='graphHero lg:grid grid-cols-2 justify-center items-center'>
        <Image src={graphImage} alt='Formulário de Contato - 150 Leads, Botão do Whatsapp - 230 Leads, Leadster - 450 Leads com 14 dias grátis' />

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className='text-4xl'>Pronto para triplicar sua
            </h2>
            <strong className='text-4xl pb-2'>Geração de Leads</strong>
            </div>
            <div className="flex gap-1 ">
                <p>Criação e ativação em</p>
                <strong className='pb-4'>4 minutos</strong>
            </div>
            <div className="flex border-t-2 border-slate-300 pt-4 pb-4 gap-4">
             <button className='pr-2 pl-2 uppercase font-bold bg-sky-500 text-white rounded-full'>Ver demonstração</button>
              <Image src={seloRD} alt='Selo RD' />
            </div>
            <div className="flex items-center">
              <div className="flex items-center w-1/2 gap-1">
                <Image className='h-5' src={noCard} alt='Sem cartão de crédito' />
                <p><span>Não</span> é necessário Cartão de Crédito</p>
              </div>

              <div className="flex items-center gap-1 w-1/2">
              <Image className='h-5' src={raring} alt='Avaliação 4.9' />
              <p>4.9/5 média de satisfação</p>
              </div>
            </div>
        </div>
    </section>
  )
}
