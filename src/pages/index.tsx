import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useGetGithubUsers } from "../querys/useGitHubUsers.query";
import UserCard from "../components/UserCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const { data: usersRequest, isLoading, isError } = useGetGithubUsers();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {isLoading && <h1>Cargando datos...</h1>}
        {!isLoading && isError && <h1>Error al obtener los usuarios</h1>}
        {!isLoading && !isError && (
          <main className={styles.main}>
            {usersRequest?.data.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </main>
        )}
      </div>
    </>
  );
}
