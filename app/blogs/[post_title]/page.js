import { getAllPostMetaData, getPathBasename, getPostByPath, removeMetadata } from '../util.js'
import MarkdownRenderer from '../../ui/markdown-renderer.jsx';

export default async function PostPage({ params }) {
    const { post_title } = await params
    const allPostMetadata = await getAllPostMetaData()

    const matchedPost = allPostMetadata.find(metadata => {
        const pathBase = getPathBasename(metadata.path)
        return pathBase === post_title
    })

    if (!matchedPost) return <p>Error : No matched</p>

    const markdownContent = (await getPostByPath(matchedPost.path))
    const rawContent = removeMetadata(markdownContent)

    return (
        <main className="container lg:max-w-[1300px] p-6 text-primary min-h-screen flex flex-col gap-4">
            <h1 className='font-bold text-4xl'>{matchedPost.title}</h1>
            <p>{matchedPost.publishedAt}</p>
            <MarkdownRenderer markdownContent={rawContent} />
        </main>
    );
}


// for static site generation upon build
// Return a list of `params` to populate the [post_title] dynamic segment
export async function generateStaticParams() {
    const posts = await getAllPostMetaData()

    return posts.map((post) => ({
        post_title: getPathBasename(post.path),
    }))
}