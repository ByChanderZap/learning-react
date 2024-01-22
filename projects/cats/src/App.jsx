import './App.css'
import { useDogImage } from './hooks/useDogImage'
import { useDogFact } from './hooks/useDogFact'

export function App () {
  // const [fact, setFact] = useState()
  const { fact, refreshRandomFact } = useDogFact()
  const { dogImage } = useDogImage({ fact })

  // Get a fact when renderizing this component

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de perritos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {dogImage && <img src={dogImage} alt='Random dog image' />}
      {/* <section>
        {fact && <p>{fact}</p>}
        {dogImage && <img src={dogImage} alt='Random dog image' />}
      </section> */}
    </main>
  )
}
