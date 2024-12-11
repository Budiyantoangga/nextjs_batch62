import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
    <title>Profile By Next JS - Batch 62</title>
    <meta name="description" content="Generated by creaet next app" />
    <meta name="viewport" content="width-=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
            <Header />
            {children}
            <Footer />
        </div>
    );
    
}