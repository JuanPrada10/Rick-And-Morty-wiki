import style from "./navbar.module.css";
import Logo from "../../assets/logos/logo-rick.png";
import { NavLink } from "react-router";

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
  return (
    <nav className={style.nav}>
      <img src={Logo} alt="Rick and Morty" className={style.img} />
      <ul className={style.ul}>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink to={item.link}>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
