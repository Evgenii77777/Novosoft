import cn from "classnames";

import styles from "./button.module.css";

interface ButtonProps {
  img?: string;
  text?: string;
  func?: void | any;
  alt?: string;
}

export const Button = ({ text, img, func, alt }: ButtonProps) => (
  <button className={cn(styles.basic, { [styles.text]: text })} onClick={func}>
    {text}
    {img && <img src={img} alt={`icon-${alt}`} />}
  </button>
);
