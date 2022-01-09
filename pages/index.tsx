import NavBar from '../Components/NavBar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <style jsx global>{`
      a {
        color: green;
      }
      `}</style>
    </div>
  )
}
