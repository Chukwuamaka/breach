import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { inter } from "@/fonts";

interface PageProps {
  title: string;
  description?: string;
  withNavbar?: boolean;
  withNavbarCTAs?: boolean;
  withFooter?: boolean;
}

export default function Page({ title, description, children, withNavbar = false, withNavbarCTAs, withFooter = false }: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {withNavbar && <Navbar withNavbarCTAs={withNavbarCTAs} />}
      <main className={`main ${inter.className}`}>
        {children}
      </main>
      {withFooter && <Footer />}
    </>
  )
}
