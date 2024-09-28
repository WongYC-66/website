import Image from "next/image";
import CardCert from "../ui/card-cert";

export default function CertificationPage() {
  return (
    <main className="container lg:max-w-[1300px] p-6 text-primary min-h-screen flex flex-col gap-4">

      <h2 className="font-bold text-2xl">Certifications</h2>

      {/* Front End*/}
      <h2 className="font-bold text-2xl self-start ms-4">Front End</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        <CardCert title='Responsive Web Design' description='FreeCodeCamp' imgSrc='/certs/cert-responsive-web-design.png' extLink='https://www.freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/responsive-web-design' />

        <CardCert title='JavaScript Algorithms and Data Structures' description='FreeCodeCamp' imgSrc='/certs/cert-javascript-algorithms-and-data-structure.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/javascript-algorithms-and-data-structures-v8' />

        <CardCert title='Front End Development Libraries' description='FreeCodeCamp' imgSrc='/certs/cert-front-end-development-library.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/front-end-development-libraries' />

        <CardCert title='Data Visualization' description='FreeCodeCamp' imgSrc='/certs/cert-data-visulization.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/data-visualization' />

        <CardCert title='JavaScript (Intermediate) Certificate' description='HackerRank' imgSrc='/certs/cert-javascript-intermediate.png' extLink='https://www.hackerrank.com/certificates/afee66052fa2' />

      </div>

      {/* Back End*/}
      <h2 className="font-bold text-2xl self-start ms-4">Back End</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        <CardCert title='Relational Database' description='FreeCodeCamp' imgSrc='/certs/cert-relational-database.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/relational-database-v8' />

        <CardCert title='Back End Development and APIs' description='FreeCodeCamp' imgSrc='/certs/cert-backend-development-and-apis.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/back-end-development-and-apis' />

        <CardCert title='Quality Assurance' description='FreeCodeCamp'
          imgSrc='/certs/cert-quality-assurance.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/quality-assurance-v7' />

        <CardCert title='Information Security' description='FreeCodeCamp' imgSrc='/certs/cert-information-security.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/information-security-v7' />

        <CardCert title='Problem Solving (Basic) Certificate' description='HackerRank' imgSrc='/certs/cert-problem-solving-basic.png' extLink='https://www.hackerrank.com/certificates/25f24bdd48b5' />

      </div>

      {/* Data Analytic / Other*/}
      <h2 className="font-bold text-2xl self-start ms-4">Data Analytics / Other</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        <CardCert title='Scientific Computing with Python' description='FreeCodeCamp' imgSrc='/certs/cert-scientific-programming-with-python.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/scientific-computing-with-python-v7' />

        <CardCert title='Data Analysis with Python' description='FreeCodeCamp' imgSrc='/certs/cert-data-analysis-with-python.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/data-analysis-with-python-v7' />

        <CardCert title='Machine Learning with Python' description='FreeCodeCamp'
          imgSrc='/certs/cert-machine-learning-with-python.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/machine-learning-with-python-v7' />

        <CardCert title='College Algebra with Python' description='FreeCodeCamp' imgSrc='/certs/cert-college-algebra-with-python.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/college-algebra-with-python-v8' />

        <CardCert title='Foundational C# with Microsoft' description='FreeCodeCamp' imgSrc='/certs/cert-foundational-cs-with-microsoft.png' extLink='https://freecodecamp.org/certification/fccb4ab014f-114b-48ed-8448-03ff36a34d10/foundational-c-sharp-with-microsoft' />

      </div>

      {/* <p>https://www.hackerrank.com/certificates/iframe/25f24bdd48b5</p>
      <p>https://www.hackerrank.com/certificates/iframe/afee66052fa2</p> */}

    </main>
  );
}
