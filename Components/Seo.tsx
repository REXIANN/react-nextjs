import * as React from 'react'
import Head from 'next/head'

// meta descriptions, author, etc
export default function Seo({ title }) {
  return (
  <Head>
    <title>{title} | Next Movies</title>
  </Head>
  )
}
