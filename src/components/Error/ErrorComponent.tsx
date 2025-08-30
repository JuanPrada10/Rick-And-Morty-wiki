import imgError from "../../assets/Error/Error-rick-and-morty.png";
import styles from "./Error.module.css";

interface Props {
  error: Error;
}

const Error = ({ error }: Props) => {
  return (
    <div className={styles.error}>
      <img src={imgError} alt="error-Rick" />
      <h1>¡Wubba Lubba Dub Dub! No encontramos nada</h1>
      <br />
      <p>Error : {error.message}</p>
    </div>
  );
};

export default Error;
