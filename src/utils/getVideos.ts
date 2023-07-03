export default async function getVideos(
  time: number = 0,
  shouldError: boolean = false
) {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/dev?query=*[_type == "post"]`,
    {
      mode: 'cors'
    }
  );

  if (!res.ok || shouldError) {
    throw new Error(`An error has occurred: ${res.status}`);
  }

  return res.json();
}