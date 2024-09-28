import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container lg:max-w-[768px] p-6 text-primary min-h-screen flex flex-col gap-20">

      {/* About me */}
      <div className="flex flex-col justify-center items-center gap-4 px-5">
        <h2 className="font-bold text-2xl self-start">About me</h2>

        {/* Profile-photo */}
        <Image alt='photo' src='/profile-photo.jpg' className="rounded-full border-solid border-4 border-primary" height={250} width={250} />

        <p className="">Laboris culpa veniam non sint nulla laborum consectetur do ut dolore nisi.Laboris culpa veniam non sint nulla laborum consectetur do ut dolore nisi.Laboris culpa veniam non sint nulla laborum consectetur do ut dolore nisi.Laboris culpa veniam non sint nulla laborum consectetur do ut dolore nisi.</p>

      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4 px-5">
        <h2 className="font-bold text-2xl self-start">Skills </h2>

        {/* Programming languages */}
        <div className="flex flex-col gap-4 bg-primary-content p-3 rounded-xl">
          <h2 className="font-bold">Programming</h2>
          <Image alt='front-end-skills' src='https://skillicons.dev/icons?i=javascript,python' width={150} height={50} />
          <div className="flex flex-wrap gap-1">
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Javascript</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Python</span>
          </div>
        </div>

        {/* Front End Skill */}
        <div className="flex flex-col gap-4 bg-primary-content p-3 rounded-xl">
          <h2 className="font-bold">Front end</h2>
          <Image alt='front-end-skills' src='https://skillicons.dev/icons?i=html,css,bootstrap,react,next,tailwindcss, daisy' width={500} height={50} />
          <div className="flex flex-wrap gap-1">
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">HTML</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">CSS</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Bootstrap</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">React</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Next</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">TailwindCSS</span>
          </div>
        </div>

        {/* BackEnd Skill */}
        <div className="flex flex-col gap-4 bg-primary-content p-3 rounded-xl">
          <h2 className="mb-2 font-bold">Back end</h2>
          <Image alt='front-end-skills' src='https://skillicons.dev/icons?i=nodejs,express,mongo,postgresql,prisma,jest' width={500} height={50} />
          <div className="flex flex-wrap gap-1">
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Node.js</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">express</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">MongoDB</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">PostgreSQL</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Prisma</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Jest</span>
          </div>
        </div>


      </div>

      {/* Contact me */}
      <div className="flex flex-col gap-4 px-5">

        <h2 className="font-bold text-2xl self-start">Contact me</h2>

        <p className="">{`Interested in working together ? Reach out and let's discuss `}</p>

        {/* Location */}
        <div className="flex gap-4">
          <Image alt='email' src='/location-mark.png' width={35} height={35} />
          <p>Malaysia</p>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <Image alt='email' src='/mail-icon.png' width={35} height={35} />
          <p>yengchien@hotmail.com</p>
        </div>

        {/* Github & Linkeinds icons */}
        <div className="flex gap-8 w-full">
          <a href='https://github.com/WongYC-66'>
            <Image alt='github' src='/github.png' width={50} height={50} />
          </a>
          <a href='https://www.linkedin.com/in/yengchien-wong/'>
            <Image alt='linkedin' src='/linkedin.png' width={50} height={50} />
          </a>
        </div>

      </div>

    </main>
  );
}
