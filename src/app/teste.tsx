import { VideoProps } from '@/types/movie';
import getMovies from '@/utils/getVideos';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface MobieResponse {
    result: VideoProps[]
}


async function getPeople() {
    const data: MobieResponse = await getMovies()
    return data.result;
    
} 

export default async function People() {
  const people = await getPeople();

  console.log(people);

  return (
    <>
      <h2 className="text-fuchsia-400">People</h2>

      <Link href="/" className="py-2">
        Home
      </Link>
      <pre>{JSON.stringify(people)}</pre>

      {people?.map((people) => (
        <div key={people.id}>{people.title}</div>
      ))}
    </>
  );
}
