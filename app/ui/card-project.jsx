import Image from "next/image"

export default function CardProject({ project }) {

    let { title, description, tech_stack, img_URL, repo_URL, demo_URL } = project

    const tech_stack_URL = `https://skillicons.dev/icons?i=${tech_stack.join(',')}&perline=3`

    img_URL =  "/website" + img_URL // for github io GH-pages

    return (
        <div className="card bg-base-100 w-[450px] shadow-xl z-0">
            {/* Project Image */}
            <div className="flex max-h-[250px]">
                <Image
                    src={img_URL}
                    alt="cert"
                    width={450}
                    height={450}
                    unoptimized
                    className="grow rounded-xl object-cover border-solid border-2"
                />
            </div>
            <div className="card-body">

                <div className="flex justify-between items-center gap-4">
                    {/* Project Title */}
                    <h2 className="card-title">{title}</h2>

                    {/* techstack icons */}
                    <div className="max-h-36 flex items-center">
                        <Image alt='tech-stack' src={tech_stack_URL} className="w-full" width={35} height={35} />
                    </div>
                </div>

                {/* Project Description */}
                <p className="text-justify">{description}</p>

                {/* Project Links to Demo / Repo */}
                <div className="card-actions">
                    <a href={repo_URL} target="_blank">
                        <button className="btn btn-primary">
                            {/* <Image alt='github' src='/github-mark-white.svg' width={25} height={25} /> */}
                            <Image alt='github' src='/website/github-mark-white.svg' width={25} height={25} />
                            Repo
                        </button>
                    </a>
                    <a href={demo_URL} target="_blank">
                        <button className="btn btn-primary">
                            {/* <Image alt='link' src='/external-link.png' className="invert" width={25} height={25} /> */}
                            <Image alt='link' src='/website/external-link.png' className="invert" width={25} height={25} />
                            Demo
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}