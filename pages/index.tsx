import * as React from 'react'
import Seo from '../Components/Seo'
import Link from 'next/link'
import { useRouter } from "next/router";

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
}

interface Props {
  results: Movie[];
}

export default function Home({ results }: Props) {
  const router = useRouter();
  const handleClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`)
  }

  return (
    <div className='container'>
      <Seo title='Home' />
      {results.map(movie => (
        <div className='movie' key={movie.id}>
          <img
            className='movie-img'
            onClick={() => handleClick(movie.id, movie.original_title)}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt='movie img'
          />
          <Link  href={`/movies/${movie.original_title}/}${movie.id}`}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        
        .movie {
          cursor: pointer;
          width: 500px;
          height: 800px;
        }
        
        .movie-img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        }
        .movie-img:hover {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/movies')
  const json = await res.json()
  const { results } = json

  return {
    props: {
      results,
    }
  }
}
