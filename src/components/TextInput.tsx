import { JSX, splitProps } from "solid-js";
import styles from "./TextInput.module.css";

type TextInputProps = {
  label: string;
  value: string;
  setValue: JSX.EventHandler<HTMLInputElement, InputEvent>;
  class?: string;
  type?: "text" | "password" | "email";
};

export function TextInput(props: TextInputProps) {
  const [local, others] = splitProps(props, [
    "label",
    "value",
    "setValue",
    "class",
    "type",
  ]);

  const type = local.type ?? "text";
  const className = `${styles.input} ${local.class}`;

  return (
    <label class={styles.label}>
      {local.label}
      <input
        type={type}
        value={local.value}
        onInput={local.setValue}
        class={className}
        {...others}
      />
    </label>
  );
}
