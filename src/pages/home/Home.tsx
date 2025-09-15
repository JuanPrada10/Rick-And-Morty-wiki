import style from "./Home.module.css";
import { Hero } from "../../components";
const Home = () => {
  return (
    <div className={style.container}>
      <Hero />
    </div>
  );
};

export default Home;
