"use client";

import { Input } from "@/shared/ui/Input";
import { Textarea } from "@/shared/ui/Textarea";
import styles from "./QuestionForm.module.scss";
import { Button } from "@/shared/ui/Button";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { InputPhone } from "@/shared/ui/InputPhone";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { Title } from "@/shared/ui/Title";
import { clsx } from "@/shared/lib/clsx";
import { useLocale, useTranslations } from "next-intl";
import { IOption, Select } from "@/shared/ui/Select";
import { IProduct } from "@/entities/Product";

interface IProps {
  productId?: number;
  selectTour?: boolean;
}

function QuestionForm({ productId, selectTour }: IProps) {
  const locale = useLocale();

  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const [options, setOptions] = useState<IOption[]>([]);
  const [fetchTours, setFetchTours] = useState(false);
  const [optionsLoading, setOptionsLoading] = useState(false);
  const [optionId, setOptionId] = useState("");
  const [optionError, setOptionError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorPost, setErrorPost] = useState(false);
  const [successPost, setSuccessPost] = useState(false);

  const t = useTranslations("Form");

  const onChangeFullName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFullName(e.target.value);

      if (!e.target.value) {
        setFullNameError(true);
      } else {
        setFullNameError(false);
      }
    },
    [],
  );

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);

      if (!e.target.value) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    },
    [],
  );

  const onChangePhone = useCallback((value: string) => {
    setPhone(value);

    if (!value) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  }, []);

  const onChangeComment = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);

    if (!e.target.value) {
      setCommentError(true);
    } else {
      setCommentError(false);
    }
  }, []);

  const onClickSelect = useCallback(() => {
    setFetchTours(true);
  }, []);

  const onChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setOptionId(e.target.value);

    if (!e.target.value) {
      setOptionError(true);
    } else {
      setOptionError(false);
    }
  }, []);

  useEffect(() => {
    const getOptionsTours = async () => {
      try {
        setOptionsLoading(true);
        const res = await API.get<IData<IProduct[]>>("/tours", {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": locale,
          },
        });

        if (res.data.success) {
          setOptions(
            res.data.data.map((el) => ({ id: el.id, name: el.title })),
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setOptionsLoading(false);
      }
    };

    if (fetchTours) {
      getOptionsTours();
    }
  }, [locale, fetchTours]);

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName) setFullNameError(true);
    if (!email) setEmailError(true);
    if (!phone) setPhoneError(true);
    if (!comment) setCommentError(true);

    if (selectTour) {
      if (!optionId) {
        setOptionError(true);
        return;
      }
    }

    if (!fullName || !email || !phone || !comment) return;

    try {
      setLoading(true);
      const data = {
        full_name: fullName,
        email,
        phone,
        comment,
        tour_id: selectTour ? +optionId : productId,
      };

      const res = await API.post<IData<any>>("/questions", data);

      if (!res.data.success) {
        throw new Error();
      }

      setSuccessPost(true);
    } catch (error) {
      setErrorPost(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      {successPost && (
        <Title type="medium" className={clsx([styles.title, styles.success])}>
          {t("Успешно забронировали")}
        </Title>
      )}

      {errorPost && (
        <Title type="medium" className={clsx([styles.title, styles.error])}>
          {t("Произошла ошибка")}
        </Title>
      )}

      <div className={styles.inner}>
        {selectTour && (
          <Select
            label={t("Выберите тур")}
            options={options}
            onClick={onClickSelect}
            loading={optionsLoading}
            value={optionId}
            onChange={onChangeSelect}
            error={optionError}
          />
        )}

        <Input
          label={t("Полное имя")}
          value={fullName}
          onChange={onChangeFullName}
          error={fullNameError}
        />
        <Input
          label={t("Email")}
          type="email"
          value={email}
          onChange={onChangeEmail}
          error={emailError}
        />
        <InputPhone
          label={t("Телефон")}
          value={phone}
          onChange={onChangePhone}
          error={phoneError}
        />
        <Textarea
          label={t("Ваш вопрос")}
          className={styles.textarea}
          value={comment}
          onChange={onChangeComment}
          error={commentError}
        />
      </div>
      <Button variyant="secondary" disabled={loading}>
        {loading ? t("Загрузка") : t("Отправить")}
      </Button>
    </form>
  );
}

export default QuestionForm;
