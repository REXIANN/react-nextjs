import * as React from 'react';
import { useRouter } from 'next/router'

const Detail: React.FC = () => {
  const router = useRouter()
  console.log({ router })

  return (
    <div>
      <h4>{router.query.title || "loading.."}</h4>
    </div>
  )
}

export default Detail
