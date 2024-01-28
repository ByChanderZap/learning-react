import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Cannot search an empty field')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Cannot search by number')
      return
    }

    if (search.length < 3) {
      setError('The search must be at least 3 characters long')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
