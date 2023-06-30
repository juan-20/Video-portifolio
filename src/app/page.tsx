
import GraphHero from '@/components/GraphHero'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import VideoPagination from '@/components/videoPagination'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <VideoPagination />
      <GraphHero />
    </main>
  )
}
