import * as React from 'react'
import '../styles/globals.css'
import NavBar from "../Components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component />
      <span>Hiii</span>
    </div>
  )
}
