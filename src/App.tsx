import { type Component } from "solid-js";
import styles from "./App.module.css";
import { Button } from "./components/Button";

export const App: Component = () => {
  return (
    <main class={styles.container}>
      <h1 class={styles.heading}>Blank space</h1>
      <Button as="link" class={styles.cta} href="/document">
        Fill the page
      </Button>
    </main>
  );
};
