export default function NavBar() {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">YC Wong</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Projects</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>FrontEnd</a></li>
                                <li><a>FullStack</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}