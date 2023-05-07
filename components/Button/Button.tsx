import styles from "./Button.module.css";

interface Props {
  label: string;
};

export const Button = ({ label }: Props) => {
  return(
    <button className={styles.button}>{label}</button>
  )
};

export default Button;