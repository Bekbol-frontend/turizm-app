"use client";

import { Input } from "@/shared/ui/Input";
import { Textarea } from "@/shared/ui/Textarea";
import styles from "./QuestionForm.module.scss";
import { Button } from "@/shared/ui/Button";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { InputPhone } from "@/shared/ui/InputPhone";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { Title } from "@/shared/ui/Title";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  productId: number;
}

function QuestionForm({ productId }: IProps) {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorPost, setErrorPost] = useState(false);
  const [successPost, setSuccessPost] = useState(false);

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

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName) setFullNameError(true);
    if (!email) setEmailError(true);
    if (!phone) setPhoneError(true);
    if (!comment) setCommentError(true);

    if (!fullName || !email || !phone || !comment) return;

    console.log({
      fullName,
      email,
      phone,
      comment,
      productId,
    });

    try {
      setLoading(true);
      const data = {
        full_name: fullName,
        email,
        phone,
        comment,
        tour_id: productId,
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
          Успешно забронировали
        </Title>
      )}

      {errorPost && (
        <Title type="medium" className={clsx([styles.title, styles.error])}>
          Произошла ошибка
        </Title>
      )}

      <div className={styles.inner}>
        <Input
          placeholder="Full name"
          value={fullName}
          onChange={onChangeFullName}
          error={fullNameError}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          error={emailError}
        />
        <InputPhone value={phone} onChange={onChangePhone} error={phoneError} />
        <Textarea
          placeholder="Your question"
          className={styles.textarea}
          value={comment}
          onChange={onChangeComment}
          error={commentError}
        />
      </div>
      <Button variyant="secondary" disabled={loading}>
        {loading ? "Загрузка..." : "Отправить"}
      </Button>
    </form>
  );
}

export default QuestionForm;
