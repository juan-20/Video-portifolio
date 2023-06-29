"use client"

import { useState } from 'react'
import videos from '../utils/videos'
import Image from 'next/image'
import Pagination from './pagination'
import ReactModal from 'react-modal';

type VideoProps = {
  id: number
  title: string
  description: string
  category: string
  thumbnail: string
}


export default function VideoPage() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [sortCategory, setSortCategory] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [video, setVideo] = useState<VideoProps>(videos[0])
  const videosPerPage = 9

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const sortedVideos = videos
  .filter((video) => !sortCategory || video.category === sortCategory)
  .sort((a, b) => {
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

  const handleVideoClick = (video: VideoProps) => {
    setIsModalOpen(true)
    setVideo(video)
  }

  const startIndex = (currentPage - 1) * videosPerPage
  const endIndex = startIndex + videosPerPage
  const currentVideos = sortedVideos.slice(startIndex, endIndex)
  const totalPages = Math.ceil(sortedVideos.length / videosPerPage)

  const categories = Array.from(new Set(videos.map((video) => video.category)))


  return (
    <div>
    <div>
    <p>Ordernar por</p>
    <select value={sortOrder} onChange={handleSortChange}>
      <option value="asc">Data de publicação (mais antigos)</option>
      <option value="desc">Data de publicação (mais novos)</option>
    </select>
        <div className='flex gap-4'>
          {categories.map((category) => (
            <p className='bg-sky-400 w-auto pr-4 pl-4 pt-1 pb-1 rounded-full' key={category} onClick={(e) => setSortCategory(category)}>
              {category}
            </p>
          ))}
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
      {currentVideos.map((video) => (
        <>
          <div
             onClick={() => handleVideoClick(video)}
            className='shadow-xl group w-80 rounded-xl relative hover:shadow-2xl cursor-pointer  hover:text-sky-500'
            key={video.id}>
            <div className="blue transition  top-0 w-80 h-44 rounded-t-xl absolute group-hover:bg-sky-400/50 z-10"></div>
            <Image className='filter rounded-t-xl hue-rotate-10'
              src={video.thumbnail} alt={video.title} width={320} height={130} />
            <h2 className='p-4 font-bold'>{video.title}</h2>
          </div>
          {/* TODO: Change this way of rendering */}
          <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
          overlayClassName="custom-modal"
          className="modal-content">
            <h2>{video.title}</h2>
            <p>{video.id}</p>
            <p>{video.description}</p>
            <p>{video.category}</p>
            <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
          </ReactModal>
        </>
      ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
