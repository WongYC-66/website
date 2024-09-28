import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost text-xl">YC Wong</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <details>
                            <summary>Projects</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 text-primary">
                                <li>
                                    <Link href='/projects/front-end'>FrontEnd</Link>
                                </li>
                                <li>
                                    <Link href='/projects/full-stack'>FullStack</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href='/certifications'>Certifications</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}