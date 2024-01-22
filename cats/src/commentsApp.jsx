// fetch(CAT_FACT_API)
//   .then(res => res.json())
//   .then(data => {
//     const { fact } = data
//     // const firstWord = fact.split(' ').slice(0, 3).join(' ')
//     const sentenceStart = fact.split(' ', 3).join(' ')
//     // fetch(`${CAT_IMAGE_API}/${sentenceStart}?json=true`)
//     //   .then(res => res.json())
//     //   .then(data => {
//     //     console.log(data)
//     //   })
//     fetch(DOG_IMAGE_API)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.message)
//       })
//     setFact(sentenceStart)
//   })
