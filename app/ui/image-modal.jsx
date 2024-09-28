'use client'
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function PhotoModal({ imgSrc, open, toggle }) {
    console.log(open)

    const modalRef = useRef(null)

    useEffect(() => {
        if (open)
            modalRef.current.showModal()
    }, [open])

    return (
    <>
        {open && (
            <dialog className="modal p-5" ref={modalRef}>
                 <div className="modal-box max-w-[1024px] h-full p-0">
                    <Image
                        src={imgSrc}
                        alt="cert"
                        fill={true}
                        unoptimized
                        className="object-contain"
                    />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        )}
    </>
)
}