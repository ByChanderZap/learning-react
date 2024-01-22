import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useDogFact = () => {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact()
      .then(fact => setFact(fact))
  }

  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
