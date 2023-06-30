 export default async function getMovies(
    time: number = 0,
    shouldError: boolean = false
  ) {
    const res = await fetch(
      `https://26g2tdsi.api.sanity.io/v2021-10-21/data/query/dev?query=*[_type == "post"]`
    )
    if (!res.ok || shouldError) {
      throw new Error(`An error has occured: ${res.status}`)
    }
  
    return res.json()
  }
  