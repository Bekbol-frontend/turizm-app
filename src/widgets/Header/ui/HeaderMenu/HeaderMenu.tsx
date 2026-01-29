import styles from "./HeaderMenu.module.scss";
import { appRoutes } from "@/shared/config/routeConfig";
import HeaderMenuLink from "../HeaderMenuLink/HeaderMenuLink";

const menuItems = [
  {
    name: "home",
    path: appRoutes.home,
  },
  {
    name: "catalog",
    path: appRoutes.catalog,
  },
  {
    name: "about",
    path: appRoutes.about,
  },
  {
    name: "reviews",
    path: appRoutes.reviews,
  },
  {
    name: "contact",
    path: appRoutes.contacts,
  },
];

function HeaderMenu() {
  return (
    <div className={styles.menuWrapper}>
      {menuItems.map((el) => (
        <HeaderMenuLink name={el.name} path={el.path} key={el.name} />
      ))}
    </div>
  );
}

export default HeaderMenu;
