import React, { DetailedHTMLProps, IframeHTMLAttributes } from 'react';
import { VideoProps } from '@/types/movie';
import ReactModal from 'react-modal';

interface ModalProps {
  // title: string;
  content: VideoProps
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const textColor = {
  'doc': 'text-sky-500',
  'ppt': 'text-yellow-600',
  'xls': 'text-emerald-500',
  'zip': 'text-black-400',
}
const textBackground = {
  'doc': 'bg-sky-200',
  'ppt': 'bg-amber-100',
  'xls': 'bg-teal-100',
  'zip': 'bg-slate-200',
}
const iconBackground = {
  'xls': 'bg-teal-200',
  'doc': 'bg-blue-300',
  'ppt': 'bg-yellow-200',
  'zip': 'bg-slate-300',
}

const fillColor = {
  'xls': 'fill-emerald-500',
  'doc': 'fill-sky-500',
  'ppt': 'fill-yellow-600',
  'zip': 'fill-black-400',
}

export const Modal = ({ content, isModalOpen, setIsModalOpen }: ModalProps) => {

  const handleDownload = (url: string, type: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `myfile.${type}`; // Replace with your own file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
        overlayClassName="custom-modal"
        className="modal-content border-t-4 border-sky-600 md:w-1/3 w-full h-fit rounded-xl">
        <div className="header flex flex-col items-start gap-4 pb-9">
        <div className="w-full flex items-end justify-end">
          <button className='' onClick={() => setIsModalOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#627397" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          </button>
        </div>
          <div className="title text-center flex justify-center items-center gap-8 pr-14 pl-14">
          <h2 className='text-sky-600 text-xl font-bold'>Webinar:
            <span className='text-teal-900'>{content.title}</span>
          </h2>
          </div>
        </div>
        <iframe
                className="mx-auto w-full h-2/5"
                src={`https://www.youtube.com/embed/${content.url}`}
                title={content.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              >
        </iframe>

        <div className="p-2">
        <div className="">
          <h2 className='font-bold pb-2 pt-4 border-b-2 border-teal-900'>Descrição</h2>
          <p className='pt-2 w-full h-fit min-h-28 '>{content.description}</p>
        </div>
        <div className="">
          <h2 className='font-bold pb-2 pt-4 border-b-2 border-teal-900'>Dowload</h2>
          <div className="pb-4 pt-2">
          <div className="dowload flex gap-2 pt-2 pb-2
          whitespace-nowrap scroll-smooth relative overflow-x-auto">
            {content.dowload?.map((item, index)=>(
            <button 
            onClick={() => handleDownload(item.link, item.type)}
            className={`${textColor[item.type]} ${textBackground[item.type]} rounded flex justify-center items-center`}
            key={index} type='button'>
              <div className={`${iconBackground[item.type]} p-2 }`}>
                <svg className={`${fillColor[item.type]}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path d="M248,128a87.34,87.34,0,0,1-17.6,52.81,8,8,0,1,1-12.8-9.62A71.34,71.34,0,0,0,232,128a72,72,0,0,0-144,0,8,8,0,0,1-16,0,88,88,0,0,1,3.29-23.88C74.2,104,73.1,104,72,104a48,48,0,0,0,0,96H96a8,8,0,0,1,0,16H72A64,64,0,1,1,81.29,88.68,88,88,0,0,1,248,128Zm-69.66,42.34L160,188.69V128a8,8,0,0,0-16,0v60.69l-18.34-18.35a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"></path></svg>
              </div>
              <p className='p-2'>{item.name}.{item.type}</p>
            </button>
            ))}
          </div>
          </div>
        </div>
        </div>
      </ReactModal>
    </>
  );
};