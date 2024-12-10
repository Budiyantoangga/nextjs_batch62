import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Main(){
return(
  <>
    <Head>
    <meta name="description" content="Generated by creaet next app" />
    <meta name="viewport" content="width-=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
      <Header />
      <p>Content</p>
      <Footer />
  </>
  );  
}