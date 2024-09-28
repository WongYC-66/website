import Image from "next/image"

export default function CardProject({ project }) {

    const { title, description, tech_stack, img_URL, repo_URL, demo_URL } = project

    const tech_stack_URL = `https://skillicons.dev/icons?i=${tech_stack.join(',')}`

    return (
        <div className="card bg-base-100 w-[450px] shadow-xl z-0">
            <div className="flex">
                <Image
                    src={img_URL}
                    alt="cert"
                    width={100}
                    height={100}
                    unoptimized
                    className="grow rounded-xl object-cover"
                />
            </div>
            <div className="card-body">

                <div className="flex justify-between">
                    <h2 className="card-title">{title}</h2>
                    {/* techstack icons */}
                    <Image alt='tech-stack' src={tech_stack_URL} width={35} height={35} />
                </div>

                <p>{description}</p>

                <div className="card-actions">
                    <a href={repo_URL} target="_blank">
                        <button className="btn btn-primary">
                            <Image alt='github' src='/github-mark-white.svg' width={25} height={25} />
                            Repo
                        </button>
                    </a>
                    <a href={demo_URL} target="_blank">
                        <button className="btn btn-primary">
                            <Image alt='link' src='/external-link.png' class="invert" width={25} height={25} />
                            Demo
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}