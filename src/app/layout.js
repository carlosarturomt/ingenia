import Head from "next/head";
import { Roboto } from "next/font/google";
import { Header } from "@/components/shared/Header/Header";
import { Footer } from "@/components/shared/Footer/Footer";
import "../styles/globals.css";

const roboto = Roboto({
  weight: ["300", "500", "700"],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6LcHGcApAAAAAITPyu8WhfIti6EGglSu3J4S677F"></script>
        <script src='https://www.google.com/recaptcha/api.js'></script>
      </Head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
