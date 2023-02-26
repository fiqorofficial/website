import { Inter } from "next/font/google";
import styles from "./page.module.css";

import Main from "../../src/app/Components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
    </main>
  );
}
