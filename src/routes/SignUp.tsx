import { type Component, createSignal, Show } from "solid-js";
import styles from "./SignUp.module.css";
import { supabase } from "../lib/utils/supabase";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { useNavigate } from "@solidjs/router";

export const SignUp: Component = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");
  const navigate = useNavigate();

  async function signup(e: MouseEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email: email(),
      password: password(),
    });
    if (error) {
      setError(error.message);
    } else {
      navigate("/", { replace: true });
    }
  }

  return (
    <main class={styles.main}>
      <form class={styles.form}>
        <TextInput
          type="email"
          label="Email"
          value={email()}
          setValue={(e) => setEmail(e.currentTarget.value)}
        />
        <TextInput
          type="password"
          label="Password"
          value={password()}
          setValue={(e) => setPassword(e.currentTarget.value)}
        />
        <Button onClick={signup}>Sign up</Button>
      </form>
      <Show when={error()}>
        <p>{error()}</p>
      </Show>
    </main>
  );
};
