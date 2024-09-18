import { client } from '/library/sanity.client'

export default async function Home() {
  const cupcakes = await client.fetch(`*[_type == "cupcake"]`)

  return (
    <div>
      <h1>Our Cupcakes</h1>
      <ul>
        {cupcakes.map((cupcake) => (
          <li key={cupcake._id}>{cupcake.name}</li>
        ))}
      </ul>
    </div>
  )
}