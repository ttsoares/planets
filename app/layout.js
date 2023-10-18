import { Antonio, League_Spartan } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  display: "swap",
});

export const metadata = {
  title: "Planetary Facts",
  description: "FrontEnd Mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${spartan.variable} w-screen h-screen`}
    >
      <body
        className={`w-full bg-black bg-cover bg-[url('../public/images/background-stars.svg')]`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
