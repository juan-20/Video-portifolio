"use client"

import { useState } from 'react'
import videos from '../utils/videos'
import Image from 'next/image'
import Pagination from './pagination'
import ReactModal from 'react-modal';
import { Modal } from './Modal'
import { VideoProps } from '@/types/movie'


export default function VideoPage() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [sortCategory, setSortCategory] = useState<string>('All')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoModalProps, setVideoModalProps] = useState<VideoProps>(videos[0])
  const videosPerPage = 9
  const startIndex = (currentPage - 1) * videosPerPage
  const endIndex = startIndex + videosPerPage
  const allVideo: VideoProps[] = videos
  const [totalPages, setTototalPages] = useState(Math.ceil( allVideo.length / videosPerPage))
  const [video, setVideo] = useState<VideoProps[]>(videos.slice(startIndex, endIndex))

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const startIndex = (page - 1) * videosPerPage
    const endIndex = startIndex + videosPerPage
    setVideo(allVideo.slice(startIndex, endIndex))
  }


  function sortVideos(sortCategory: string, sortOrder: string) {
    let sorted = videos
    if (sortCategory !== 'All') {
      sorted = sorted.filter((video) => video.category === sortCategory)
    }
    sorted = sorted.sort((a, b) => {
      console.log(a);
      console.log(b);
      const dateA = a.id
      const dateB = b.id
      if (dateA > dateB) {
        return sortOrder === 'asc' ? -1 : 1
      }
      if (dateA < dateB) {
        return sortOrder === 'desc' ? 1 : -1
      }
      const categoryA = a.category.toLowerCase()
      const categoryB = b.category.toLowerCase()
      if (categoryA < categoryB) {
        return sortOrder === 'asc' ? -1 : 1
      }
      if (categoryA > categoryB) {
        return sortOrder === 'asc' ? 1 : -1
      }
      return 0
    })
    setVideo(sorted.slice(startIndex, endIndex))
    setTototalPages(Math.ceil(sorted.length / videosPerPage))
  }


  const handleVideoClick = (video: VideoProps) => {
    setIsModalOpen(true)
    setVideoModalProps(video)
  }



  const categories = Array.from(new Set(videos.map((video) => video.category)))



  return (
    <div>

    <div className='flex w-full justify-between gap-24 border-b-2 border-gray-300 pb-4 pt-12'>
 
        <div className='flex w-fit gap-4'>
          {categories.map((category) => (
            <button 
            className='border-2 border-teal-900 text-teal-900 cursor-pointer hover:border-sky-500 hover:text-sky-500 focus:bg-sky-500 focus:text-white  w-auto pr-4 pl-4 pt-1 pb-1 rounded-full' key={category} 
            onClick={() => {sortVideos(category, sortOrder), setSortCategory(category), handlePageChange}}>
              {category}
            </button>
          ))}
            {/* <button 
            className='border-2 border-teal-900 text-teal-900 cursor-pointer hover:border-sky-500 hover:text-sky-500 focus:bg-sky-500 focus:text-white  w-auto pr-4 pl-4 pt-1 pb-1 rounded-full' 
            onClick={(e) => {sortVideos('All', sortOrder), setSortCategory('All'), handlePageChange}}>
              All
            </button> */}
          </div>

          <div className="flex items-center justify-center gap-4">
            <p className='font-bold'>Ordernar por</p>
            <select className='border-2 border-teal-900 text-teal-900 p-2 cursor-pointer rounded-xl'
             value={sortOrder} onChange={() => sortVideos('All', sortOrder)}>
              <option value="asc" selected>Data de publicação</option>
              <option value="asc">Mais Novos</option>
              <option value="desc">Mais Antigos</option>
            </select>
          </div>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 pt-12">
      {video.map((video) => (
        <>
          <div
            onClick={() => handleVideoClick(video)}
            className='shadow-xl group w-80 rounded-xl relative hover:shadow-2xl cursor-pointer  hover:text-sky-500'
            key={video.id}>
            <div className="flex justify-center items-center transition  top-0 w-80 h-44 rounded-t-xl absolute group-hover:bg-sky-400/50 z-10">
              <svg className='hidden group-hover:flex' xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#ecf3f3" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
            </div>
            <Image className='filter rounded-t-xl hue-rotate-10'
              src={video.thumbnail} alt={video.title} width={320} height={130} />
            <h2 className='p-4 font-bold'>{video.title}</h2>
          </div>
        </>
      ))}
      
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} content={videoModalProps} />

      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
