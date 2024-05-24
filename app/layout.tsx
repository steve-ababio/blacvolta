import type { Metadata } from "next";
import {Poppins,Asap } from "next/font/google";
import {PrimeReactProvider} from "primereact/api";
import {IBM_Plex_Sans} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";

const asap = Asap({
  subsets:["latin"],
  weight:["400","500","600"],
  variable:"--font-asap"
});
const ibmsans = IBM_Plex_Sans({
  subsets:["latin"],
  weight:["400","500",],
  variable:"--font-ibmsans"
})
const poppins = Poppins({
  subsets:["latin"],
  weight:["400","600",],
  variable:"--font-poppins"
});

const kamericbook = localFont({
  src:[
    {path:"../public/fonts/kamerikcyrillicbook.ttf",weight:"400"},
    {path:"../public/fonts/kamerikcyrillicbold.ttf",weight:"700"},
    {path:"../public/fonts/kamerikcyrillicheavy.ttf",weight:"900"}
  ],
  variable:"--font-kamerik"
});

const futura = localFont({
  src:[
    {path:"../public/fonts/futuramedium.ttf",weight:"600"},
    {path:"../public/fonts/futurabold.ttf",weight:"900"},
  ],
  variable:"--font-futura"
});
export const metadata: Metadata = {
  title: "Blacvolta",
  description: "Entertainment Hub - Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" imageSrcSet="/assets/images/bgmobile.webp" media="(max-width:640px)" as="image"/>
        <link rel="preload" imageSrcSet="/assets/images/bgtablet.webp" media="((min-width:640.1px) and (max-width:768px)" as="image"/>
        <link rel="preload" imageSrcSet="/assets/images/bgminidesktop.webp" media="(min-width:768.1px) and (max-width:1280px)" as="image"/>
        <link rel="preload" imageSrcSet="/assets/images/bg.webp" media="(min-width:1280.1px)" as="image"/>
        <noscript>
          Sorry! Your need to enable JavaScript to use this app.!
        </noscript>  
      </head>
      <PrimeReactProvider>
        <body className={` ${asap.variable} ${poppins.variable} ${futura.variable} ${ibmsans.variable} ${kamericbook.variable}`}>
          {children}
          <Analytics />
        </body>
      </PrimeReactProvider>
    </html>
  );
}
