import Link from 'next/link'
import { getPathBasename } from '../blogs/util'

export default function CardPost({ postMetadata }) {

    const { title, publishedAt, summary, path } = postMetadata

    const post_title_url = getPathBasename(path)

    return (
        <Link href={`/blogs/${post_title_url}`}>
            <div className="card bg-base-100 w-full shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold">{title}</h2>
                    <p>{publishedAt}</p>
                    <p>{summary}</p>
                </div>
            </div>
        </Link>
    )
}
