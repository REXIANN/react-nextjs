import * as React from 'react'

export default function Home() {
  const [counter, setCounter] = React.useState(0)
  return (
    <div>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
    </div>
  )
}
