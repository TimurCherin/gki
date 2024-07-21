
export { data }

const data = async (pageContext) => {


  const response = await fetch('https://brillout.github.io/star-wars/api/films.json')
  const movies = await response.json()

  return {
    movies,
    // The page's <title>
    title: `${movies.length} Star Wars Movies`
  }
}


