import * as React from 'react';
import { useRouter } from 'next/router'
import { GetServerSideProps} from "next";

import Seo from "../../Components/Seo";

interface Props {
  ids: string[]
}

const Detail: React.FC<Props> = ({ ids }: Props) => {
  const router = useRouter()
  console.log({ router })
  const [title] = ids || [];

  return (
    <div>
      <Seo title={title}/>
      <h4>{title || "loading.."}</h4>
    </div>
  )
}

export default Detail

export function getServerSideProps({ params: { id } }: GetServerSideProps) {
  console.log({ id })
  return {
    props: {ids: id}
  }
}
