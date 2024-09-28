import Image from "next/image";
import CardCert from "../ui/card-cert";

export default function CertificationPage() {
  return (
    <main className="container lg:max-w-[1300px] p-6 text-primary min-h-screen flex flex-col gap-4">

      <h2 className="font-bold text-2xl">Certifications</h2>

      {/* Front End*/}
      <h2 className="font-bold text-2xl self-start ms-4">Front End</h2>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        <CardCert title='FreeCodeCamp - Responsive Web Design' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://www.freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/responsive-web-design' />

        <CardCert title='FreeCodeCamp - JavaScript Algorithms and Data Structures' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/javascript-algorithms-and-data-structures-v8' />

        <CardCert title='FreeCodeCamp - Front End Development Libraries' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/front-end-development-libraries' />

        <CardCert title='FreeCodeCamp - Data Visualization' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/data-visualization' />

      </div>

      {/* Back End*/}
      <h2 className="font-bold text-2xl self-start ms-4">Back End</h2>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        <CardCert title='FreeCodeCamp - Relational Database' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/relational-database-v8' />

        <CardCert title='FreeCodeCamp - Back End Development and APIs' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/back-end-development-and-apis' />

        <CardCert title='FreeCodeCamp - Quality Assurance' description='Built 5 projects'
          imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/quality-assurance-v7' />

        <CardCert title='FreeCodeCamp - Information Security' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/information-security-v7' />

      </div>

      {/* Data Analytic / Other*/}
      <h2 className="font-bold text-2xl self-start ms-4">Data Analytic / Other</h2>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        <CardCert title='FreeCodeCamp - Scientific Computing with Python' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/scientific-computing-with-python-v7' />

        <CardCert title='FreeCodeCamp - Data Analysis with Python' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/data-analysis-with-python-v7' />

        <CardCert title='FreeCodeCamp - Machine Learning with Python' description='Built 5 projects'
          imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/machine-learning-with-python-v7' />

        <CardCert title='FreeCodeCamp - College Algebra with Python' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/college-algebra-with-python-v8'/>

        <CardCert title='FreeCodeCamp - Foundational C# with Microsoft' description='Built 5 projects ' imgSrc='https://placehold.co/600x400' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/foundational-c-sharp-with-microsoft

'/>

      </div>

      {/* <p>https://www.hackerrank.com/certificates/iframe/25f24bdd48b5</p>
      <p>https://www.hackerrank.com/certificates/iframe/afee66052fa2</p> */}

    </main>
  );
}
