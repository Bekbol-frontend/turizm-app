import { Paragraph } from "@/shared/ui/Paragraph";
import { IReview } from "../../types";
import YoutubeBtn from "../ReviewsSwiper/YoutubeBtn/YoutubeBtn";
import styles from "./ReviewCard.module.scss";
import { useResponsive } from "@/shared/lib/useResponsive";

interface IProps {
  data: IReview;
}

function ReviewCard({ data }: IProps) {
  const { mobile } = useResponsive();

  return (
    <div className={styles.rewiewCard}>
      <YoutubeBtn user_name={data.user_name} link={data.video_url} />
      <div className={styles.swiperItemInner}>
        <Paragraph
          className={styles.descName}
          type={mobile ? "small" : "large"}
        >
          {data.user_name}
        </Paragraph>
        <div className={styles.ratingWrapper}>
          <Paragraph type={mobile ? "large" : "small"}>{data.rating}</Paragraph>
          <span className={styles.rating} />
        </div>
        <Paragraph
          type={mobile ? "small" : "medium"}
          className={styles.country}
        >
          {data.city}
        </Paragraph>

        <div className={styles.tag}>
          <Paragraph type={mobile ? "small" : "medium"}>
            {data.tour.title}
          </Paragraph>
        </div>
        <Paragraph type="medium">{data.comment}</Paragraph>
      </div>
    </div>
  );
}

export default ReviewCard;
