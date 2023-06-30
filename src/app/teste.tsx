import { Modal } from '@/components/Modal';
import Pagination from '@/components/pagination';
import { VideoProps } from '@/types/movie';
import getMovies from '@/utils/getVideos';
import Link from 'next/link';
import Image from 'next/image'
import { notFound } from 'next/navigation';
import { useRef, useState } from 'react';
import SelectBox from '@/components/selectBox';

interface MovieResponse {
    result: VideoProps[]
}


async function getMovieReq() {
    const data: MovieResponse = await getMovies()
    return data.result;
    
} 

const videos = await getMovieReq();
export default async function People() {
    // FIXME: resolve can`t use onchange
//   const [videos, setVideos] = useState<VideoProps[]>(videos || [])
  let currentPage = 1
  let sortOrder: 'asc' | 'desc' = 'asc'	
//   const [currentPage, setCurrentPage] = useState<number>(1)
//   const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
//   const [sortCategory, setSortCategory] = useState<string>('All')
    // const isModalOpen = useRef(false)

    // const handleOpenModal = (video: VideoProps) => {
    //     isModalOpen.current = true;
    //     videoModalProps = video;
    //   };
    //   const handleCloseModal = () => {
    //     isModalOpen.current = false;
    //   };
//   const [isModalOpen, setIsModalOpen] = useState(false);

  let videoModalProps = videos[0]
//   const [videoModalProps, setVideoModalProps] = useState<VideoProps>(videos[0])
  const videosPerPage = 9
  const startIndex = (currentPage - 1) * videosPerPage
  const endIndex = startIndex + videosPerPage
  const allVideo: VideoProps[] = videos || []
  console.log(allVideo);

  let totalPages = Math.ceil( allVideo.length / videosPerPage)
    //   const [totalPages, setTototalPages] = useState(Math.ceil( allVideo.length / videosPerPage))
    let video = allVideo.slice(startIndex, endIndex)
    // const [video, setVideo] = useState<VideoProps[]>(allVideo.slice(startIndex, endIndex))

  const handlePageChange = (page: number) => {
    currentPage = page
    const startIndex = (page - 1) * videosPerPage
    const endIndex = startIndex + videosPerPage
    video = allVideo.slice(startIndex, endIndex)
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
    video = sorted.slice(startIndex, endIndex)
    totalPages = Math.ceil(sorted.length / videosPerPage)
  }

//   const handleVideoClick = (video: VideoProps) => {
//     setIsModalOpen(true)
//     videoModalProps = video
//   }

  const categories = Array.from(new Set(videos.map((video) => video.category)))
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelect = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };


  return (
    <section>
      {videos.length === 0 ? <p>Nenhum video encontrado</p> : 
      <>
        {/* <div className='flex flex-col lg:flex-row w-full justify-between gap-24 border-b-2 border-gray-300 pb-4 pt-12'>
          <div className="flex items-center justify-center gap-4">
            <p className='font-bold'>Ordernar por</p>
            <select className='border-2 border-teal-900 text-teal-900 p-2 cursor-pointer rounded-xl'
              value={sortOrder} onChange={() => sortVideos('All', sortOrder)}>
              <option value="asc" defaultValue={'asc'}>Data de publicação</option>
              <option value="asc">Mais Novos</option>
              <option value="desc">Mais Antigos</option>
            </select>
          </div>
        </div> */}
        <SelectBox options={['Option 1', 'Option 2', 'Option 3']} onSelect={handleSelect}  />
        <div className="grid center  grid-cols-1 md:grid-cols-3 gap-4 pb-12 pt-12">
          {video.map((video) => (
            <div
            //   onClick={() => handleOpenModal(video)}
              className='shadow-xl group w-80 rounded-xl relative hover:shadow-2xl cursor-pointer  hover:text-sky-500'
              key={video.id}>
              <div className="flex justify-center items-center transition  top-0 w-80 h-44 rounded-t-xl absolute group-hover:bg-sky-400/50 z-10">
                <svg className='hidden group-hover:flex' xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#ecf3f3" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
              </div>
              <Image className='filter rounded-t-xl hue-rotate-10'
                src={video.thumbnail} alt={video.title} width={320} height={130} />
              <h2 className='p-4 font-bold'>{video.title}</h2>
            </div>
          ))}
          {/* <Modal isModalOpen={isModalOpen.current} setIsModalOpen={handleCloseModal} content={videoModalProps} /> */}
        </div>
        {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange} /> */}
      </>
      }
    </section>
  );
}
