import React from 'react'

export default function SlugPage ({ params }) {
  return (
    <main>
      <h1>Slug Page - {params.slug}</h1>
    </main>
  )
}
