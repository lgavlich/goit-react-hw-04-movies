import { NavLink } from "react-router-dom";
import s from "../Navigation/Nav.module.css";

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      HomePage
    </NavLink>
    <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
      MoviesPage
    </NavLink>
  </nav>
);
export default Navigation;
