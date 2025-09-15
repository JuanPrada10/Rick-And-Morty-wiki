import style from "./navbar.module.css";
import Logo from "../../assets/logos/logo-rick.png";
import { NavLink } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const items = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/characters",
    name: "Characters",
  },
  {
    link: "/locations",
    name: "Locations",
  },
  {
    link: "/episodes",
    name: "Episodes",
  },
];
const Navbar = () => {
  const logoRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      opacity: 0,
      x: -100,
    });
  }, [logoRef]);
  return (
    <nav className={style.nav}>
      <img
        src={Logo}
        ref={logoRef}
        alt="Rick and Morty"
        className={style.img}
      />
      <ul className={style.ul}>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive ? style.active + " " + style.link : style.link
              }
            >
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
