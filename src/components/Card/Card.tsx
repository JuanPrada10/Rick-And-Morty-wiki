import style from "./Card.module.css";
type CardProps = {
  name?: string;
  img?: string;
  episode?: string;
  airDate?: string;
};
const Card = ({ name, img }: CardProps) => {
  return (
    <>
      <div className={style.card}>
        <h3>{name}</h3>
        <img src={img} alt="" />
        <p>{}</p>
      </div>
    </>
  );
};

export default Card;
