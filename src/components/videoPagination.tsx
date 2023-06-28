"use client"

import { useState } from 'react'
import videos from '../utils/videos'
import Image from 'next/image'
import Pagination from './pagination'
import ReactModal from 'react-modal';

export default function VideoPage() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [sortCategory, setSortCategory] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const startIndex = (currentPage - 1) * videosPerPage
  const endIndex = startIndex + videosPerPage
  const currentVideos = sortedVideos.slice(startIndex, endIndex)
  const totalPages = Math.ceil(sortedVideos.length / videosPerPage)

  const categories = Array.from(new Set(videos.map((video) => video.category)))


  return (
    <div>
    <div>
      <button onClick={handleSortChange}>
        Sort by date ({sortOrder === 'asc' ? 'oldest first' : 'newest first'})
      </button>
      <select value={sortCategory} onChange={(e) => setSortCategory(e.target.value)}>
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className='flex gap-4'>
          {categories.map((category) => (
            <p className='bg-sky-400 w-auto pr-4 pl-4 pt-1 pb-1 rounded-full' key={category} onClick={(e) => setSortCategory(category)}>
              {category}
            </p>
          ))}
          </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pb-12">
      {currentVideos.map((post) => (
        // TODO: Add effct to be blue when hover
        <>
          <div
            onClick={() => setIsModalOpen(true)}
            className='shadow-xl w-80 rounded-xl relative hover:shadow-2xl cursor-pointer  hover:text-sky-500'
            key={post.id}>
            <div className="blue top-0 w-80 h-44 rounded-t-xl absolute hover:bg-sky-400/50 z-10"></div>
            <Image className='filter rounded-t-xl hue-rotate-10 hover:bg-sky-400/90'
              src={post.thumbnail} alt={post.title} width={320} height={130} />
            <h2 className='p-4 font-bold'>{post.title}</h2>
          </div>
          <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
          overlayClassName="custom-modal"
          className="modal-content">
            <h2>Modal Title</h2>
            <p>Modal Content</p>
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

