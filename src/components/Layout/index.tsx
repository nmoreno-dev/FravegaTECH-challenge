import { PropsWithChildren } from "react";
import localFont from "next/font/local";
import styles from "./styles.module.css";
import Link from "next/link";

const geistSans = localFont({
  src: "../../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <header className={styles.header}>
        <Link href={"/"}>
          <h1>GitHub Users API</h1>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Made with love ❤️ by Nahuel Moreno</p>
      </footer>
    </div>
  );
};

export default Layout;
