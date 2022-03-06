import * as React from 'react'
import Head from 'next/head'

interface Props {
  title: string;
}
// meta descriptions, author, etc
export default function Seo({ title }: Props) {
  return (
  <Head>
    <title>{title} | Next Movies</title>
  </Head>
  )
}
