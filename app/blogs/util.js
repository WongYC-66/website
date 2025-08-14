import path from 'node:path';
import { readdir, readFile } from 'node:fs/promises';

const extractMetadata = async (path) => {
    const regex = /---\r\n(.+\r\n)+---\r\n/

    const file = await readFile(path, { encoding: 'utf8' })

    const metadata = file.match(regex)[0]
    const lines = metadata.split('\n').slice(1, -2)     // remove '---', '\n'

    const metadataHash = { path }

    lines.forEach(line => {
        const firstColonIdx = line.indexOf(":")
        const key = line.slice(0, firstColonIdx)    // split into key & val
        const val = line.slice(firstColonIdx + 1,)
        metadataHash[key] = val
    })

    return metadataHash
}

const getAllMarkdownFilePaths = async () => {
    // ["/public/blogs/2025/title.mdx", ...]

    const basePath = process.cwd()
    const markdownRootPath = path.join(basePath, "public", "blogs")
    const years = await readdir(markdownRootPath);

    const allMarkdownPaths = []

    // todo: could be further optimise with Promise.all 
    for (let year of years) {
        const markdownYearDir = path.join(markdownRootPath, year)
        const files = await readdir(markdownYearDir);
        for (let filename of files) {
            allMarkdownPaths.push(path.join(markdownYearDir, filename))
        }
    }

    return allMarkdownPaths
}

export const getAllPostMetaData = async () => {
    // [
    //     {title, publishedAt, summary}, ...
    // ]

    const allMarkDownPaths = await getAllMarkdownFilePaths()
    const allMetaData = await Promise.all(
        allMarkDownPaths.map(path => extractMetadata(path))
    )
    return allMetaData
}

export const getPathBasename = (filePath) => {
    // without extension
    return path.basename(filePath, '.md')
}

export const getPostByPath = async (path) => {
    const post = await readFile(path, { encoding: 'utf8' })
    // const post = await import(path);
    return post
}

export const removeMetadata = (str) => {
    const regex = /---\r\n(.+\r\n)+---\r\n/
    return str.replace(regex, "")
}

export const sanitizeDateStr = (dateStr) => {
    return dateStr.replaceAll(/[^0-9\-]/g, '')
}

export const sortByDateFn = (a, b) => {
    // DESC
    const dateA = sanitizeDateStr(a.publishedAt)
    const dateB = sanitizeDateStr(b.publishedAt)
    return Date.parse(dateB) - Date.parse(dateA)
}

