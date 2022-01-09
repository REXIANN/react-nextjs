import * as React from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component />
      <span>Hiii</span>
    </div>
  )
}
