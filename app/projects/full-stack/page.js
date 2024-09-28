import CardProject from "@/app/ui/card-project";
import allProjects from "../projects.json"

export default function CertificationPage() {

  const fullStackProjects = allProjects.filter(project => project.type === 'full-stack')

  return (
    <main className="container lg:max-w-[1000px] p-6 text-primary min-h-screen flex flex-col gap-4">

      <h2 className="font-bold text-2xl">Full Stack Projects</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4 place-items-center">

        {fullStackProjects.map(project => <CardProject key={project.title} project={project}/>)}

      </div>

    </main>
  );
}
