import React from "react";
import styles from "./style.module.scss";

interface PropsCircle {
  size?: "small" | "medium" | "large";
  color?: "success" | "info" | "danger" | "grey";
  content?: number;
}
let sizeEnum = {
  small: "circle__size--small",
  medium: "circle__size--medium",
  large: "circle__size--large",
};
let colorEnum = {
  success: "circle__color--success",
  info: "circle__color--info",
  danger: "circle__color--danger",
  grey: "circle__color--grey",
};

const Circle = ({
  size = "medium",
  color = "success",
  content = 10,
}: PropsCircle) => {
  return (
    <div
      className={[
        styles["core__circle"],
        styles[colorEnum[color]],
        styles[sizeEnum[size]],
      ].join(" ")}
    >
      <span className={styles["content"]}>{content}</span>
    </div>
  );
};

export default Circle;
