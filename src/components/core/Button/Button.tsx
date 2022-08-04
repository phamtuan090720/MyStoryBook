import React from "react";
import styles from "./style.module.scss";
interface ButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: "text" | "contained" | "outline";
  theme?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
let sizeClassEnum = {
  small: `button__size--small`,
  medium: `button__size--medium`,
  large: `button__size--large`,
};
let themeEnum = {
  primary: `button__theme--primary`,
  secondary: `button__theme--secondary`,
  danger: `button__theme--danger`,
};
let variantEnum = {
  text: "button__variant--text",
  contained: "button__variant--contained",
  outline: "button__variant--outline",
};
const Button = ({
  className = "",
  children,
  startIcon,
  endIcon,
  size = "small",
  theme = "primary",
  disabled = false,
  variant = "text",
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={[
        className,
        styles["button"],
        styles[sizeClassEnum[size]],
        `${variant === "contained" ? styles[themeEnum[theme]] : ""}`,
        styles[variantEnum[variant]],
        `${disabled ? styles["button__disabled"] : ""}`,
      ].join(" ")}
      disabled={disabled}
    >
      <div className={styles["content"]}>
        <span className={styles["content__icon"]}>{startIcon}</span>
        <span className={styles["content__text"]}>{children}</span>
        <span className={styles["content__icon"]}> {endIcon}</span>
      </div>
    </button>
  );
};

export default Button;
