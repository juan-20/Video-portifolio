"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Pagination from '../components/pagination'
import { Modal } from '../components/Modal'
import { VideoProps } from '@/types/movie'
import NextSanityImage from 'next-sanity-image';
import { urlFor } from '@/utils/client'
interface VideoPageProps{
  result: VideoProps[]
}

interface ResultProps {
  videos: VideoPageProps
}

export default function VideoPage(props: ResultProps) {
  const [videos, setVideos] = useState<VideoProps[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [sortCategory, setSortCategory] = useState<string>('All')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoModalProps, setVideoModalProps] = useState<VideoProps>(props.videos.result[0])
  const videosPerPage = 9
  const startIndex = (currentPage - 1) * videosPerPage
  const endIndex = startIndex + videosPerPage
  const allVideo: VideoProps[] = props.videos.result
  const [totalPages, setTototalPages] = useState(Math.ceil( allVideo.length / videosPerPage))
  const [video, setVideo] = useState<VideoProps[]>(allVideo.slice(startIndex, endIndex))

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/dev?query=*[_type == "post"]`);
      const videos = await res.json();
      
      if (!res.ok) {
        console.error(videos);
        throw new Error('Failed to fetch API');
      }
      setVideos(videos.result)
    }
    getData()
  }, [])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const startIndex = (page - 1) * videosPerPage
    const endIndex = startIndex + videosPerPage
    setVideo(allVideo.slice(startIndex, endIndex))
  }

function sortVideos(sortCategory: string, sortOrder: string) {
  debugger
  let sorted = videos;
  console.log(sortOrder);
  if (sortCategory !== 'All') {
    sorted = sorted.filter((video) => video.category === sortCategory);
  }
  sorted = sorted.sort((a, b) => {
    if (a.numerVideo > b.numerVideo) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a.numerVideo < b.numerVideo) {
      return sortOrder === 'desc' ? -1 : 1;
    }
    if (a.category.toLowerCase() > b.category.toLowerCase()) {
      return sortOrder === 'desc' ? -1 : 1;
    }
    if (a.category.toLowerCase() < b.category.toLowerCase()) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    return 0;
  });
  setVideo(sorted.slice(startIndex, endIndex));
  setTototalPages(Math.ceil(sorted.length / videosPerPage));
}


const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setSortOrder(event.target.value as 'desc' | 'asc');
  sortVideos('All', event.target.value as 'desc' | 'asc')
};

  const handleVideoClick = (video: VideoProps) => {
    setIsModalOpen(true)
    setVideoModalProps(video)
  }

  const categories = Array.from(new Set(videos.map((video) => video.category)))

  return(
    <section>
      {props.videos.result.length === 0 ? <p>Nenhum video encontrado</p> : 
      <>
        <div className='flex flex-col lg:flex-row items-center w-full justify-between gap-24 border-b-2 border-gray-300 pb-4 pt-12'>

          <div className='flex flex-col lg:flex-row lg:gap-0 gap-4 justify-center items-center h-auto w-fit md:gap-4'>
            {categories.map((category) => (
              <button 
              className='border-2 border-teal-900 text-teal-900 cursor-pointer hover:border-sky-500 hover:text-sky-500 focus:bg-sky-500 focus:text-white  w-auto pr-4 pl-4 pt-1 pb-1 rounded-full' key={category} 
              onClick={() => {sortVideos(category, sortOrder), setSortCategory(category), handlePageChange}}>
                {category}
              </button>
            ))}
              <button 
              className='border-2 border-teal-900 text-teal-900 cursor-pointer hover:border-sky-500 hover:text-sky-500 focus:bg-sky-500 focus:text-white  w-auto pr-4 pl-4 pt-1 pb-1 rounded-full' 
              onClick={(e) => {sortVideos('All', sortOrder), setSortCategory('All'), handlePageChange}}>
                Todos
              </button>
            </div>
          <div className="flex items-center justify-center gap-4">
            <label htmlFor="sortOrder" className='font-bold'>Ordernar por</label>
            <select name="sortOrder" className='border-2 border-teal-900 text-teal-900 p-2 cursor-pointer rounded-xl'
              value={sortOrder} onChange={handleSelectChange}>
              <option value="" >Data de publicação</option>
              <option value="asc">Mais Novos</option>
              <option value="desc">Mais Antigos</option>
            </select>
          </div>
        </div>
        <div className="grid center  grid-cols-1 md:grid-cols-3 gap-4 pb-12 pt-12">
          {video.map((video) => (
            <div
              onClick={() => handleVideoClick(video)}
              className='shadow-xl group w-80 rounded-xl relative hover:shadow-2xl cursor-pointer  hover:text-sky-500'
              key={video.numerVideo}>
              <div className="flex justify-center items-center transition  top-0 w-80 h-44 rounded-t-xl absolute group-hover:bg-sky-400/50 z-10">
                <svg className='hidden group-hover:flex' xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#ecf3f3" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
              </div>
              <Image 
                className='filter rounded-t-xl hue-rotate-10'
                src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/dev/`+ video.thumbnail.asset._ref.toString().replace("image-", "").replace("-png", "") + ".png" } alt={video.title} width={320} height={130} 
                />
              <h2 className='p-4 font-bold'>{video.title}</h2>
            </div>
          ))}
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} content={videoModalProps} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange} />
      </>
      }
    </section>
  )
}