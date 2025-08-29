import HeroImg from "../../assets/logos/pngegg.png";
import style from "./hero.module.css";
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.heroText}>
        <h1>Rick And Morty Wiki</h1>
        <p>
          This is a page for practicing react and TypeScript trying to use a
          good practices.
        </p>
      </div>
      <img src={HeroImg} alt="rick and morty images" className={style.img} />
    </div>
  );
};
export default Hero;
