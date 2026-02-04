"use client";
import { Container } from "@/shared/ui/Container";
import styles from "./CatalogProducts.module.scss";
import CategoryCatalog, { ICategory } from "./CategoryCatalog/CategoryCatalog";
import { IProduct, Product } from "@/entities/Product";
import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import LoopIcon from "@/shared/assets/icons/loop-right-line.svg";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocale } from "next-intl";
import PageLoader from "next/dist/client/page-loader";
import { PageLoading } from "@/shared/ui/PageLoading";
import { Empty } from "@/shared/ui/Empty";

function CatalogProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [typeCategory, setTypeCategory] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const locale = useLocale();

  const onChangeCategory = useCallback((id: number) => {
    setTypeCategory(id);
  }, []);

  useEffect(() => {
    try {
      setLoading(true);
      const getPopularTours = async () => {
        const res = await API.get<IData<IProduct[]>>("/tours", {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": locale,
          },
        });
        console.log(res);
        setProducts(res.data.data);
      };

      const getCategories = async () => {
        const res = await API.get<IData<ICategory[]>>("/categories", {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": locale,
          },
        });
        setCategories(res.data.data);
      };

      getPopularTours();
      getCategories();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [locale]);

  const tours = useMemo(() => {
    return products.filter((el) => el.category.id === typeCategory);
  }, [products, typeCategory]);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <CategoryCatalog
          data={categories}
          onChangeCategory={onChangeCategory}
          typeCategory={typeCategory}
        />
        {tours.length ? (
          <div className={styles.products}>
            {tours.map((el) => (
              <Product data={el} key={el.id} />
            ))}
          </div>
        ) : (
          <Empty />
        )}

        {/* <Button variyant="secondary" className={styles.loopBtn}>
          <span>
            <Image src={LoopIcon} alt="turizm loop" width={16} height={16} />
          </span>
          Загрузить ещё
        </Button> */}
      </Container>
    </section>
  );
}

export default CatalogProducts;
