import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "YC Wong | Portfolio",
  description: "Yeng Chien Wong's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">

          <NavBar />

          <div className="grow">
            {children}
          </div>

          <Footer />

        </div>

      </body>
    </html>
  );
}
