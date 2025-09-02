import styles from "./EpisodeCard.module.css";
import Button from "../Button/Button";
import img from "../../assets/logos/rick-Episode.jpg";

interface Props {
  name: string;
  episode: string;
  date: string;
}
const EpisodeCard = ({ date, episode, name }: Props) => {
  // Extraer número de season del string "S03E01"
  const match = episode.match(/^S(\d+)E\d+$/i);
  const season = match ? parseInt(match[1], 10) : null;
  // Asignar color según la season
  const getCircleColor = (season: number | null) => {
    switch (season) {
      case 1:
        return "#43e97b";
      case 2:
        return "#68ec3c";
      case 3:
        return "#21a1f3";
      case 4:
        return "#ffb347";
      case 5:
        return "#ff5e62";
      default:
        return "#ccc";
    }
  };
  return (
    <div className={styles.card}>
      <img src={img} alt="episode" />
      <div className={styles.text}>
        <p>
          <span>Name:</span> {name}
        </p>
        <div className={styles.season}>
          <p>
            <span>Episode:</span> {episode}
          </p>
          <div
            className={styles.circle}
            style={{ background: getCircleColor(season) }}
          ></div>
        </div>
        <p>
          <span>Air Date:</span> {date}
        </p>
        <Button>Resumen</Button>
      </div>
    </div>
  );
};

export default EpisodeCard;
