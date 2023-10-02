import { type Component } from "solid-js";
import styles from "./App.module.css";
import { A } from "@solidjs/router";

export const App: Component = () => {
  return (
    <main class={styles.container}>
      <h1 class={styles.heading}>Blank space</h1>
      <A class={styles.cta} href="/document">
        Fill the page
      </A>
    </main>
  );
};
