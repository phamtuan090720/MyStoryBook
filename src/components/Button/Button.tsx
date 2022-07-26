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
const Button = ({
  className = "",
  children,
  startIcon,
  endIcon,
  size = "small",
  theme = "primary",
}: ButtonProps) => {
  return (
    <button
      className={[
        className,
        styles["button"],
        styles[sizeClassEnum[size]],
        styles[themeEnum[theme]],
      ].join(" ")}
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
