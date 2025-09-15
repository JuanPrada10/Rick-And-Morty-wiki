import HeroImg from "../../assets/logos/pngegg.png";
import style from "./Hero.module.css";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, TextPlugin);

const Hero = () => {
  const heroImage = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      opacity: 0,
      y: -200,
      duration: 1,
    })
      .from(textRef.current, {
        text: "",
        duration: 1.4,
        ease: "none",
      })
      .fromTo(
        heroImage.current,
        {
          opacity: 0,
          x: 400,
        },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "bounce.out",
        }
      );
  }, [heroImage, textRef]);

  return (
    <div className={style.container}>
      <div className={style.heroText}>
        <h1 ref={titleRef}>Rick And Morty Wiki</h1>
        <p ref={textRef}>
          This is a page for practicing react and TypeScript trying to use a
          good practices.
        </p>
      </div>
      <img
        src={HeroImg}
        alt="rick and morty images"
        ref={heroImage}
        className={style.img}
      />
    </div>
  );
};
export default Hero;
