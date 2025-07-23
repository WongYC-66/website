export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center text-slate-600">
            <p>YC Wong © {year}</p>
            <p className="text-slate-400">Built with Next.js, tailwindcss, daisyUI</p>
            <a href="https://www.flaticon.com/" className="text-slate-400" title="icons">All icons used are from Flaticon</a>
        </footer>
    )
}