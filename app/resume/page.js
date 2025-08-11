'use client'

import { useState, useEffect } from "react";

export default function ResumePage() {
  const [latestResumeURL, setLatestResumeURL] = useState("")

  useEffect(() => {
    // window.location can only run in browser, 
    // placed at useEffect, else next.js SSR error
    const origin = window.location.origin
    setLatestResumeURL(generateResumeURL(origin))
  }, [])

  return (
    <main className="container lg:max-w-[1000px] p-6 text-primary min-h-screen flex flex-col gap-4">
      <h2>Resume: </h2>

      <li>
        <a href={latestResumeURL} download>Download PDF</a>
      </li>

      <PDFViewer url={latestResumeURL} />
    </main>
  );
}

const generateResumeURL = (origin) => {

  // Keep adding here, do not remove historical
  const ALL_MY_RESUME_LINKS = {
    "2025-07": `/website/resume/Yeng_Chien_Wong_2025_07.pdf`,
    "2025-08": `/website/resume/Yeng_Chien_Wong_2025_08.pdf`,
    // ...
  }

  // Edit here to represent the latest default 
  const latest_key = "2025-08"

  return origin + ALL_MY_RESUME_LINKS[latest_key]
}

function PDFViewer(props) {
  return (
    <iframe
      className="pdf"
      src={props.url}
      style={{ aspectRatio: "16/9", width: "100%", minHeight: "800px" }}>
    </iframe>
  )
}



