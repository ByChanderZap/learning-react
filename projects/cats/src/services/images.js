const DOG_IMAGE_API = 'https://dog.ceo/api/breeds/image/random'

export const getRandomImage = async () => {
  const res = await fetch(DOG_IMAGE_API)
  const data = await res.json()
  return data.message
}
