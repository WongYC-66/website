import Image from "next/image"

export default function CardCert({ imgSrc, title, description, extLink }) {
    return (
        <div className="card bg-base-100 w-56 shadow-xl">
            <div className="flex">
                <Image
                    src={imgSrc}
                    alt="cert"
                    width={100}
                    height={100}
                    className="grow rounded-xl object-cover" />
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
        </div>
    )
}