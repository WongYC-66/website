import CardPost from '../ui/card-post.jsx'
import { getAllPostMetaData, sortByDateFn } from './util.js'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog, aka my thought process.',
}

export default async function Page() {

  const allPostMetadata = await getAllPostMetaData()

  allPostMetadata.sort(sortByDateFn)

  return (
    <main className="container lg:max-w-[1300px] p-6 text-primary min-h-screen flex flex-col gap-4">

      <h1 className="font-bold text-2xl">My Blog</h1>

      {allPostMetadata.map(postMetadata => <CardPost key={postMetadata.path} postMetadata={postMetadata} />)}

    </main>
  )
}

