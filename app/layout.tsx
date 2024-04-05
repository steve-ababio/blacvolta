import type { Metadata } from "next";
import { Inter,Poppins,Asap } from "next/font/google";
import {PrimeReactProvider} from "primereact/api"
import "./globals.css";

const asap = Asap({
  subsets:["latin"],
  weight:["200","500","800","900"],
  variable:"--font-asap"
});
const poppins = Poppins({
  subsets:["latin"],
  weight:["200","500","800","900"],
  variable:"--font-poppins"
})
export const metadata: Metadata = {
  title: "Blac Volta",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body className={`${asap.variable} ${poppins.variable}`}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
