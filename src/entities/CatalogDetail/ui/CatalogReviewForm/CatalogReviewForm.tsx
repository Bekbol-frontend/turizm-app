"use client";

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./CatalogReviewForm.module.scss";
import { Input } from "@/shared/ui/Input";
import { Textarea } from "@/shared/ui/Textarea";
import { Button } from "@/shared/ui/Button";
import { StarInput } from "@/shared/ui/StarInput";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { style } from "framer-motion/client";
import { Title } from "@/shared/ui/Title";
import { useTranslations } from "next-intl";

interface IProps {
  tour_id: number;
}

function CatalogReviewForm({ tour_id }: IProps) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const [rating, setRating] = useState(0);

  const [result, setResult] = useState("");
  const [resultError, setResultError] = useState(false);
  const [postLoading, setPostLoading] = useState(false);

  const t = useTranslations("CatalogReview");

  const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);

    if (!value) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, []);

  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    if (!value) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, []);

  const onChangeComment = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      setComment(value);

      if (!value) {
        setCommentError(true);
      } else {
        setCommentError(false);
      }
    },
    [],
  );

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!name) {
        setNameError(true);
      }
      if (!email) {
        setEmailError(true);
      }
      if (!comment) {
        setCommentError(true);
      }

      if (name && email && comment) {
        const data = {
          tour_id,
          name,
          email,
          comment,
          rating,
        };

        try {
          setPostLoading(true);
          const response = await API.post<IData<any>>("/reviews", data, {
            headers: {
              "Accept-Language": "uz",
            },
          });

          if (!response.data.success) {
            throw new Error("Error");
          }

          setResult(t("Thank you! Your comment will appear on the site soon"));
          setResultError(false);

          setNameError(false);
          setEmailError(false);
          setCommentError(false);
          setName("");
          setEmail("");
          setComment("");
          setRating(0);
        } catch (error) {
          setResult(
            t("There was an error sending the comment Please try again later"),
          );
          setResultError(true);
        } finally {
          setPostLoading(false);
        }
      }
    },
    [tour_id, name, email, comment, rating, t],
  );

  useEffect(() => {
    if (result) {
      setTimeout(() => {
        setResult("");
        setResultError(false);
      }, 7000);
    }
  }, [result]);

  return (
    <div className={styles.block}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          value={name}
          onChange={onChangeName}
          error={nameError}
          label={t("Your full name")}
        />
        <Input
          type="email"
          value={email}
          onChange={onChangeEmail}
          error={emailError}
          label={t("Email")}
        />
        <Textarea
          label={t("Comment")}
          value={comment}
          onChange={onChangeComment}
          error={commentError}
        />

        <StarInput value={rating} onChange={setRating} />

        <Button
          type="submit"
          variyant="secondary"
          className={styles.btn}
          disabled={postLoading}
        >
          {postLoading ? t("Sending") : t("Send")}
        </Button>

        <div className={styles.resultTextBlock}>
          {resultError ? (
            <Title type="small" className={styles.errorTitle}>
              {result}
            </Title>
          ) : (
            <Title type="small" className={styles.successTitle}>
              {result}
            </Title>
          )}
        </div>
      </form>
    </div>
  );
}

export default CatalogReviewForm;
