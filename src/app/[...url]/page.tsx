import { ragChar } from '@/lib/rag-char'
import React from 'react'
interface PageProps {
    params: {
        url: string | string[] | undefined 
    }
}
function reconstructedUrl({url}:{
    url: string | string[] | undefined
}) {
    return url ? `/${url}` : '/'
}
const Page = ({params}:PageProps) => {
    const reconstructedUrl = params.url ? `/${params.url}` : '/'
    await ragChar.context.add({
        type:"html",
        source:
    })
  return (
  <>

  </>
  )
}

export default Page
