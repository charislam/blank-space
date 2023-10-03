import { A } from "@solidjs/router";
import { splitProps, type ParentProps } from "solid-js";
import styles from "./Button.module.css";

type SharedProps = {
  class?: string;
};

type Link = {
  as: "link";
  isExternal?: boolean;
  href: string;
} & SharedProps;

type Button = {
  as?: "button";
  onClick: (e: MouseEvent) => void | Promise<void>;
} & SharedProps;

type ButtonProps = Link | Button;

export function Button(props: ParentProps<ButtonProps>) {
  const className = `${styles.button} ${props.class ?? ""}`;

  if (props.as === "link") {
    const [local, others] = splitProps(props, [
      "isExternal",
      "children",
      "href",
      "class",
    ]);
    const Component = local.isExternal ? "a" : A;

    return (
      <Component href={local.href} class={className} {...others}>
        {local.children}
      </Component>
    );
  }

  const [local, others] = splitProps(props, ["onClick", "children", "class"]);

  return (
    <button onClick={local.onClick} class={className} {...others}>
      {local.children}
    </button>
  );
}
