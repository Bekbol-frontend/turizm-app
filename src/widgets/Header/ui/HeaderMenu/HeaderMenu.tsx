import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import { appRoutes } from "@/shared/config/routeConfig";
import HeaderMenuLink from "../HeaderMenuLink/HeaderMenuLink";

const menuItems = [
  {
    name: "Home",
    path: appRoutes.home,
  },
  {
    name: "Catalog",
    path: appRoutes.catalog,
  },
  {
    name: "About",
    path: appRoutes.about,
  },
  {
    name: "Reviews",
    path: appRoutes.reviews,
  },
  {
    name: "Contacts",
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
