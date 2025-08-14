import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize"; // For security
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// assisted by chatgpt & gemini
export default function MarkdownRenderer({ markdownContent }) {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]} // Order matters: raw then sanitize
            components={{
                h1: ({ node, ...props }) => (
                    <h1 className="font-bold text-2xl" {...props} />
                ),
                h2: ({ node, ...props }) => (
                    <h2 className="font-bold text-xl" {...props} />
                ),
                h3: ({ node, ...props }) => (
                    <h3 className="font-bold text-lg" {...props} />
                ),
                ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-6" {...props} />
                ),
                ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-6" {...props} />
                ),
                li: ({ node, ...props }) => (
                    <li className="font-bold" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4" {...props} />
                ),
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            style={vscDarkPlus}
                            PreTag="div"
                            language={match[1]}
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        >
            {markdownContent}
        </Markdown>
    );
};