"use client";

import { Input } from "@/shared/ui/Input";
import { Textarea } from "@/shared/ui/Textarea";
import styles from "./BookingForm.module.scss";
import { Button } from "@/shared/ui/Button";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { InputPhone } from "@/shared/ui/InputPhone";
import { clsx } from "@/shared/lib/clsx";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { Title } from "@/shared/ui/Title";
import { useTranslations } from "next-intl";

interface IProps {
  productId: number;
}

function BookingForm({ productId }: IProps) {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [secondaryPhone, setSecondaryPhone] = useState("");
  const [secondaryPhoneError, setSecondaryPhoneError] = useState(false);

  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const [count, setCount] = useState<number>(1);
  const [startDate, setStartDate] = useState("");
  const [startDateError, setStartDateError] = useState(false);

  const [endDate, setEndDate] = useState("");
  const [endDateError, setEndDateError] = useState(false);

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

  const onChangeSecondaryPhone = useCallback((value: string) => {
    setSecondaryPhone(value);

    if (!value) {
      setSecondaryPhoneError(true);
    } else {
      setSecondaryPhoneError(false);
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

  const onMinusCount = useCallback(() => {
    setCount((prev) => {
      if (prev === 1) return 1;

      return prev - 1;
    });
  }, []);

  const onPlusCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const onChangeStartDate = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);

    if (!e.target.value) {
      setStartDateError(true);
    } else {
      setStartDateError(false);
    }
  }, []);

  const onChangeEndDate = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);

    if (!e.target.value) {
      setEndDateError(true);
    } else {
      setEndDateError(false);
    }
  }, []);

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName) setFullNameError(true);
    if (!email) setEmailError(true);
    if (!phone) setPhoneError(true);
    if (!secondaryPhone) setSecondaryPhoneError(true);
    if (!comment) setCommentError(true);
    if (!startDate) setStartDateError(true);
    if (!endDate) setEndDateError(true);

    if (
      !fullName ||
      !email ||
      !phone ||
      !secondaryPhone ||
      !comment ||
      !startDate ||
      !endDate
    ) {
      return;
    }

    try {
      setLoading(true);

      const data = {
        tour_id: productId,
        full_name: fullName,
        email: email,
        max_people: count,
        starting_date: startDate,
        ending_date: endDate,
        primary_phone: phone,
      };

      const res = await API.post<IData<any>>("/bookings", data);

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
        <Input
          placeholder={t("Полное имя")}
          value={fullName}
          onChange={onChangeFullName}
          error={fullNameError}
        />
        <Input
          placeholder={t("Email")}
          type="email"
          value={email}
          onChange={onChangeEmail}
          error={emailError}
        />

        <Input
          placeholder={t("Дата начала")}
          type="date"
          value={startDate}
          onChange={onChangeStartDate}
          error={startDateError}
        />
        <Input
          placeholder={t("Дата окончания")}
          type="date"
          value={endDate}
          onChange={onChangeEndDate}
          error={endDateError}
        />
        <InputPhone value={phone} onChange={onChangePhone} error={phoneError} />
        <InputPhone
          value={secondaryPhone}
          onChange={onChangeSecondaryPhone}
          error={secondaryPhoneError}
        />

        <div className={styles.countWrapper}>
          <Button
            variyant="secondary"
            type="button"
            className={clsx([styles.btn, styles.btnMinus])}
            onClick={onMinusCount}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 9.16675V10.8334H15.8337V9.16675H4.16699Z"
                fill="#042A2B"
              />
            </svg>
          </Button>
          <Input
            type="number"
            className={styles.inputCount}
            min={1}
            value={count}
          />
          <Button
            variyant="secondary"
            type="button"
            className={clsx([styles.btn, styles.btnPlus])}
            onClick={onPlusCount}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5V0H6.66667V5H11.6667V6.66667H6.66667V11.6667H5V6.66667H0V5H5Z"
                fill="#B8F6F8"
              />
            </svg>
          </Button>
        </div>

        <Textarea
          placeholder={t("Сообщение")}
          className={styles.textarea}
          value={comment}
          onChange={onChangeComment}
          error={commentError}
        />
      </div>
      <Button variyant="secondary" disabled={loading}>
        {loading ? t("Загрузка") : t("Забронировать")}
      </Button>
    </form>
  );
}

export default BookingForm;
