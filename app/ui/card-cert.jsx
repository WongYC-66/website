'use client'

import { useState } from "react"
import Image from "next/image"
import PhotoModal from "./image-modal"

export default function CardCert({ imgSrc, title, description, extLink }) {

    const [open, setOpen] = useState(false)

    const toggleModal = () => {
        setOpen(prev => !prev)
    }

    return (
        <div className="card bg-base-100 w-56 shadow-xl">
            <div className="flex">
                <Image
                    src={imgSrc}
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
                    <a href={extLink} target="_blank">
                        <button className="btn btn-primary">Show credentials</button>
                    </a>
                </div>
            </div>

            {/* Modal of photo upon click */}
            <PhotoModal imgSrc={imgSrc} open={open}/>

        </div>
    )
}