import { imgUrl } from "@/shared/api";
import { Heading } from "../../Heading";
import { ISectionBanner } from "../types";
import styles from "./SectionBanner.module.scss";

interface IProps {
  data: ISectionBanner;
}

function SectionBanner({ data }: IProps) {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, .3)), url(${imgUrl}/${data.image})`,
      }}
    >
      <div className={styles.inner}>
        <Heading type="small" className={styles.title}>
          {data.title}
        </Heading>
      </div>
    </section>
  );
}

export default SectionBanner;
