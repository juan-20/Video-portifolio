"use client"

import GraphHero from '@/components/GraphHero'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import VideoPage from '@/app/videoPagination'
import { VideoProps } from '@/types/movie'
import getMovies from '@/utils/getVideos'


export default async function Home() {
  const data = { result: await getMovies(1500) }

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoPage key={1} videos={data.result} />
      <GraphHero />
      <Footer />
    </main>
  )
}