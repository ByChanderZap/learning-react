const DOG_FACT_API = 'https://dog-api.kinduff.com/api/facts'

export const getRandomFact = async () => {
  const res = await fetch(DOG_FACT_API)
  const data = await res.json()
  return data.facts[0]
}
