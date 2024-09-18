import { client } from '/library/sanity.client'

export default async function Home() {
  const cakes = await client.fetch(`*[_type == "cakes"]`)

  return (
    <div>
      <h1>Our Cakes</h1>
      <ul>
        {cakes.map((cake) => (
          <li key={cake._id}>{cake.name}</li>
        ))}
      </ul>
    </div>
  )
}