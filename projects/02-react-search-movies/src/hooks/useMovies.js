import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies.js'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const prevSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === prevSearch.current) return

    try {
      setLoading(true)
      setError(null)
      prevSearch.current = search
      const moviesFound = await searchMovies({ search })
      setMovies(moviesFound)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => { // <-- this is not being calculated everytime, just when the dependencies get modified
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies
  return { movies: sortedMovies, getMovies, loading }
}
