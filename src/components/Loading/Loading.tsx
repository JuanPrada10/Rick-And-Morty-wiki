import styles from "./Loading.module.css";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <RingLoader color="#68ec3c" size={128} />
    </div>
  );
};

export default Loading;
