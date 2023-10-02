import { type Component, createSignal, Show } from "solid-js";
import styles from "./Login.module.css";
import { supabase } from "../lib/utils/supabase";

export const Login: Component = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");

  async function signup(e: MouseEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email: email(),
      password: password(),
    });
    if (error) {
      setError(error.message);
    }
  }

  return (
    <main class={styles.main}>
      <form>
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signup}>Sign up</button>
      </form>
      <Show when={error()}>
        <p>{error()}</p>
      </Show>
    </main>
  );
};
