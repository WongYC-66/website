'use client'

import { useState } from "react"
import Image from "next/image"
import PhotoModal from "./image-modal"

export default function CardCert({ cert }) {

    const { img_Src, title, description, ext_Link } = cert

    const [open, setOpen] = useState(false)

    const toggleModal = () => {
        setOpen(prev => !prev)
    }

    return (
        <div className="card bg-base-100 w-56 shadow-xl z-0">
            <div className="flex">
                <Image
                    src={img_Src}
                    alt="cert"
                    width={100}
                    height={100}
                    unoptimized
                    className="grow rounded-xl object-cover" 
                    onClick={toggleModal}
                />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <a href={ext_Link} target="_blank">
                        <button className="btn btn-primary">Show credentials</button>
                    </a>
                </div>
            </div>

            {/* Modal of photo upon click */}
            <PhotoModal imgSrc={img_Src} open={open}/>

        </div>
    )
}