import * as React from 'react'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component />
      <span>Hiii</span>
      <style jsx global>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  )
}
