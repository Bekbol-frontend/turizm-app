import { IProduct } from "@/entities/PopularTours/productItems";
import styles from "./Product.module.scss";
import Image from "next/image";
import { Title } from "@/shared/ui/Title";
import { Paragraph } from "@/shared/ui/Paragraph";
import { StarBall } from "@/shared/ui/StarBall";
import { Button } from "@/shared/ui/Button";
import { PhoneBtn } from "@/shared/ui/PhoneBtn";

interface IProps {
  data: IProduct;
}

function Product({ data }: IProps) {
  const { imgUrl, title, day, ball, name, price, phone } = data;

  return (
    <div className={styles.product}>
      <div className={styles.imgBlock}>
        <Image src={imgUrl} alt="product" width={300} height={300} />
      </div>
      <div className={styles.body}>
        <Title type="small">{title}</Title>
        <Paragraph className={styles.day} type="medium">
          {day}
        </Paragraph>
        <div className={styles.ball}>
          <Paragraph type="small">{ball.rating}</Paragraph>
          <Paragraph
            type="medium"
            className={styles.count}
          >{`(${ball.count})`}</Paragraph>
          <StarBall />
        </div>
        <Paragraph className={styles.name}>{name}</Paragraph>
        <Title type="medium" className={styles.price}>
          {price}
        </Title>
        <div className={styles.btns}>
          <Button variyant="secondary">Забронировать</Button>
          <PhoneBtn phone={phone} />
        </div>
      </div>
    </div>
  );
}

export default Product;
