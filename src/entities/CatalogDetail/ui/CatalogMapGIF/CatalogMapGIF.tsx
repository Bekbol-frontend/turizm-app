import Image from "next/image";
import styles from "./CatalogMapGIF.module.scss";
import { imgUrl } from "@/shared/api";

interface IProps {
  gif_map: string;
  title: string;
}

function CatalogMapGIF({ gif_map, title }: IProps) {
  return (
    <div className={styles.block}>
      <Image
        src={`${imgUrl}${gif_map}`}
        width={300}
        height={300}
        alt={title}
        className={styles.img}
      />
    </div>
  );
}

export default CatalogMapGIF;
