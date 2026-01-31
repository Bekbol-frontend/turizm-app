import styles from "./HeaderMenu.module.scss";
import { appRoutes } from "@/shared/config/routeConfig";
import HeaderMenuLink from "../HeaderMenuLink/HeaderMenuLink";
import { clsx } from "@/shared/lib/clsx";

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

interface IProps {
  className?: string;
  isMobile?: boolean;
  onCloseDrawer?: () => void;
}

function HeaderMenu({
  className = "",
  isMobile = false,
  onCloseDrawer,
}: IProps) {
  return (
    <div
      className={clsx([styles.menuWrapper, className], {
        [styles.mobile]: isMobile,
      })}
    >
      {menuItems.map((el) => (
        <HeaderMenuLink
          name={el.name}
          path={el.path}
          key={el.name}
          onCloseDrawer={onCloseDrawer}
        />
      ))}
    </div>
  );
}

export default HeaderMenu;
