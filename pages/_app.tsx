import * as React from 'react'
import '../styles/globals.css'
import Layout from "../Components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component />
      </Layout>
    </div>
  )
}
