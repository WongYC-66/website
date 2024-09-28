'use client'

import { useRef } from "react";
import Link from "next/link"

export default function NavBar() {

    const dropdownRef = useRef(null)

    const toggleMenu = () => {
        dropdownRef.current.removeAttribute('open')
    };

    return (
        <nav className="navbar bg-primary text-primary-content fixed z-10">
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost text-xl">YC Wong</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <details ref={dropdownRef}>
                            <summary >Projects</summary>
                            <ul className="bg-base-100 rounded-t-none p-2 text-primary">
                                <li onClick={toggleMenu}>
                                    <Link href='/projects/front-end'>FrontEnd</Link>
                                </li>
                                <li onClick={toggleMenu}>
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