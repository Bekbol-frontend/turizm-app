"use client";
import { Container } from "@/shared/ui/Container";
import styles from "./CatalogProducts.module.scss";
import CategoryCatalog, { ICategory } from "./CategoryCatalog/CategoryCatalog";
import { IProduct, Product } from "@/entities/Product";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { PageLoading } from "@/shared/ui/PageLoading";
import { Empty } from "@/shared/ui/Empty";

function CatalogProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [typeCategory, setTypeCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const locale = useLocale();

  const onChangeCategory = useCallback((id: number | null) => {
    setTypeCategory(id);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [toursRes, categoriesRes] = await Promise.all([
          API.get<IData<IProduct[]>>("/tours", {
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": locale,
            },
          }),
          API.get<IData<ICategory[]>>("/categories", {
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": locale,
            },
          }),
        ]);

        setProducts(toursRes.data.data);
        setCategories(categoriesRes.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [locale]);

  const tours = useMemo(() => {
    if (!products.length) return [];

    if (typeCategory === null) return products;

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
      </Container>
    </section>
  );
}

export default CatalogProducts;
