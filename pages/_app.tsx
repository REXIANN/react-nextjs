import * as React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from "../Components/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App
