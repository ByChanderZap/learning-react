import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/images'

export function useDogImage ({ fact }) {
  const [dogImage, setDogImage] = useState()

  // Get image when the fact gets updated
  useEffect(() => {
    getRandomImage()
      .then(image => setDogImage(image))
  }, [fact])

  return { dogImage }
}
