import Button from "../Button/Button";
import styles from "./GroupPagination.module.css";

interface Props {
  page: number;
  next: string;
  handleNext: () => void;
  handlePrev: () => void;
}
const GroupPagination = ({ page, next, handleNext, handlePrev }: Props) => {
  return (
    <div className={styles.pagination}>
      <Button disabled={page === 1} handleClick={handlePrev}>
        Prev
      </Button>
      <div className={styles.page}>{page}</div>
      <Button disabled={!next} handleClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default GroupPagination;
