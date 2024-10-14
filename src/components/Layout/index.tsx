import { PropsWithChildren } from "react";
import localFont from "next/font/local";
import styles from "./styles.module.css";

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
        <h1>GitHub Users API</h1>
      </header>
      {children}
      <footer>
        <h1>Made with love by Nahuel Moreno</h1>
      </footer>
    </div>
  );
};

export default Layout;
