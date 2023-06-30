import React from 'react'
import graphImage from '../assets/comparativo_img_CTA.png'
import Image from 'next/image'

export default function GraphHero() {
  return (
    <section>
        <Image src={graphImage} alt='Formulário de Contato - 150 Leads, Botão do Whatsapp - 230 Leads, Leadster - 450 Leads com 14 dias grátis' />

        <div className="flex flex-col">
            <h2>Pronto para triplicar sua</h2>
            <strong>Geração de Leads</strong>
            <div className="flex gap-4">
                <p>Criação e ativação em</p>
                <strong>4 minutos</strong>
            </div>
            <button className='pr-8 pl-8 bg-sky-500'>Ver demonstração</button>
        </div>
    </section>
  )
}
