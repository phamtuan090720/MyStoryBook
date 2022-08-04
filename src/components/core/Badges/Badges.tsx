import React from "react";
import styles from "./style.module.scss";
interface BadgeProps {
  size?: "small" | "medium" | "large";
  variant?: "round" | "square";
  theme?: "primary" | "secondary" | "grey";
  className?: string;
  label?: string;
  selected?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
let variantEnum = {
  round: "badge__variant--round",
  square: "badge__variant--square",
  // circle: "badge__variant--circle",
};
let sizeEnum = {
  small: "badge__size--small",
  medium: "badge__size--medium",
  large: "badge__size--large",
};
let themeEnum = {
  primary: "badge__theme--primary",
  secondary: "badge__theme--secondary",
  grey: "badge__theme--grey",
};
const Badge = ({
  variant = "round",
  className = "",
  size = "small",
  theme = "grey",
  label = "Badge Label",
  selected = false,
  startIcon,
  endIcon,
}: BadgeProps) => {
  return (
    <div
      className={[
        styles["core__badge"],
        className,
        styles[variantEnum[variant]],
        styles[sizeEnum[size]],
        styles[themeEnum[theme]],
        styles[selected ? "badge__selected" : ""],
      ].join(" ")}
    >
      <div className={styles["content"]}>
        <span className={styles["content__icon"]}>{startIcon}</span>
        <span className={styles["content__text"]}>{label}</span>
        <span className={styles["content__icon"]}>{endIcon}</span>
      </div>
    </div>
  );
};

export default Badge;
