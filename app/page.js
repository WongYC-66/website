import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container lg:max-w-[768px] p-6 text-primary min-h-screen flex flex-col gap-20">
      <div className="flex flex-col gap-4 px-5">

        {/* Hello! */}
        <h2 className="font-bold text-2xl self-start">
          {`Hello, my name is YengChien!`}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {/* Profile-photo */}
          {/* <Image alt='photo' src='/profile-photo.jpg' className="rounded-full border-solid border-4 border-primary" height={250} width={250} /> */}
          <Image alt='photo' src='/website/profile-photo.jpg' className="rounded-full border-solid border-4 border-primary" height={250} width={250} />

          {/* Short-description */}
          <p>
            {` I'm a full-stack web developer with experience using React.js, Node.js, PostgreSQL and Ruby on Rails.`}
          </p>
        </div>

        {/* Button My Projects */}
        <Link href='/projects/full-stack'>
          <button className="btn btn-ghost w-full">
            <p className="text-xl">Browse My Projects</p>
          </button>
        </Link>


      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4 px-5">
        <h2 className="font-bold text-2xl self-start">Skills </h2>

        {/* Programming languages */}
        <div className="flex flex-col gap-4 bg-primary-content p-3 rounded-xl">
          <h2 className="font-bold">Programming</h2>
          <Image alt='front-end-skills' src='https://skillicons.dev/icons?i=javascript,python,ruby' width={150} height={50} />
          <div className="flex flex-wrap gap-1">
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Javascript</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Python</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Ruby</span>
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
          <Image alt='front-end-skills' src='https://skillicons.dev/icons?i=nodejs,express,mongo,postgresql,prisma,jest,rails' width={500} height={50} />
          <div className="flex flex-wrap gap-1">
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Node.js</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">express</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">MongoDB</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">PostgreSQL</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Prisma</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Jest</span>
            <span className="px-3 py-0.5 rounded-3xl bg-primary text-primary-content">Ruby on Rails</span>
          </div>
        </div>


      </div>

      {/* About me */}
      <div className="flex flex-col justify-center items-center gap-4 px-5">
        <h2 className="font-bold text-2xl self-start">About me</h2>

        <p className="">{`I graduated in 2019 with a degree in Mechanical Engineering and worked in the field for four years. I eventually realized that I had a stronger interest in software development, so I decided to make a career switch. I’ve been teaching myself how to program, primarily through FreeCodeCamp and The Odin Project. These online programs included many hands-on projects that helped me develop my skills and solidify my passion for web development. I’m now eager to continue growing as a PERN stack developer by working on personal projects and seeking opportunities to advance my career in software engineering.`}</p>

        {/* Button My Certifications */}
        <Link href='/certifications' className="w-full">
          <button className="btn btn-ghost w-full">
            <p className="text-xl">My Certifications</p>
          </button>
        </Link>

      </div>

      {/* Contact me */}
      <div className="flex flex-col gap-4 px-5">

        <h2 className="font-bold text-2xl self-start">Contact me</h2>

        <p className="">{`Interested in working together ? Reach out and let's discuss `}</p>

        {/* Location */}
        <div className="flex gap-4">
          {/* <Image alt='email' src='/location-mark.png' width={35} height={35} /> */}
          <Image alt='email' src='/website/location-mark.png' width={35} height={35} />
          <p>Malaysia</p>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          {/* <Image alt='email' src='/mail-icon.png' width={35} height={35} /> */}
          <Image alt='email' src='/website/mail-icon.png' width={35} height={35} />
          <p>yengchien@hotmail.com</p>
        </div>

        {/* Github & Linkeinds icons */}
        <div className="flex gap-8 w-full">
          <a href='https://github.com/WongYC-66'>
            {/* <Image alt='github' src='/github.png' width={50} height={50} /> */}
            <Image alt='github' src='/website/github.png' width={50} height={50} />
          </a>
          <a href='https://www.linkedin.com/in/yengchien-wong/'>
            {/* <Image alt='linkedin' src='/linkedin.png' width={50} height={50} /> */}
            <Image alt='linkedin' src='/website/linkedin.png' width={50} height={50} />
          </a>
        </div>

      </div>

    </main>
  );
}
