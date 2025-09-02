import type React from "react";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  disabled?: boolean;
}
const Button = ({ children, handleClick, disabled }: Props) => {
  return (
    <button disabled={disabled} className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
