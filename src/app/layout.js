import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/shared/Header/Header";

const roboto = Roboto({
  weight: ["300", "500", "700"],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
