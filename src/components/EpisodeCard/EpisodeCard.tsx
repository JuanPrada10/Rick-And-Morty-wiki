import styles from "./EpisodeCard.module.css";

interface Props {
  children: React.ReactNode;
}
const EpisodeCard = ({ children }: Props) => {
  return <div className={styles.card}>{children}</div>;
};

export default EpisodeCard;
