"use client";

import { IProduct } from "@/entities/Product";
import { Title } from "@/shared/ui/Title";

interface IProps {
  data: IProduct;
}

function ThePriceInCatalog({ data }: IProps) {
  return (
    <div>
      <Title type="medium">В стоимость входит</Title>
    </div>
  );
}

export default ThePriceInCatalog;
