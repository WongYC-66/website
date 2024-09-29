import CardCert from "../ui/card-cert";
import allCerts from './certs.json'

export default function CertificationPage() {

  const fronEndCerts = allCerts.filter(cert => cert.type == 'front-end')
  const backEndCerts = allCerts.filter(cert => cert.type == 'back-end')
  const otherCerts = allCerts.filter(cert => cert.type == 'other')

  return (
    <main className="container lg:max-w-[1300px] p-6 text-primary min-h-screen flex flex-col gap-4">

      <h2 className="font-bold text-2xl">Certifications</h2>

      {/* Front End*/}
      <h2 className="font-bold text-2xl self-start ms-4">Front End</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        {fronEndCerts.map(cert => <CardCert key={cert.title} cert={cert} />)}

      </div>

      {/* Back End*/}
      <h2 className="font-bold text-2xl self-start ms-4">Back End</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        {backEndCerts.map(cert => <CardCert key={cert.title} cert={cert} />)}

      </div>

      {/* Data Analytic / Other*/}
      <h2 className="font-bold text-2xl self-start ms-4">Data Analytics / Other</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-4">

        {otherCerts.map(cert => <CardCert key={cert.title} cert={cert} />)}

      </div>

    </main>
  );
}
