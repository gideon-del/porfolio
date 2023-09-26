import "@/styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} bg-primary text-white`}>
      <Component {...pageProps} />
    </div>
  );
}
