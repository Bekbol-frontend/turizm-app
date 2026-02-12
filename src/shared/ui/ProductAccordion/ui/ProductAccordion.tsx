"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductAccordion.module.scss";
import { useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import { Paragraph } from "../../Paragraph";
import { useResponsive } from "@/shared/lib/useResponsive";
import Image from "next/image";
import Plus from "@/shared/assets/icons/add-line.svg";
import Minus from "@/shared/assets/icons/subtract-line.svg";
import { IProductFAQ } from "@/entities/Product";

interface IProps {
  data: IProductFAQ;
  index: number;
}

function ProductAccordion({ data, index }: IProps) {
  const { title, questions } = data;
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);
  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);

  const { mobile } = useResponsive();

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
    if (!isSectionOpen) {
      setOpenQuestionId(null); // Section yopilganda barcha savollarni yopish
    }
  };

  const toggleQuestion = (questionIndex: number) => {
    setOpenQuestionId(openQuestionId === questionIndex ? null : questionIndex);
  };

  return (
    <motion.div
      className={styles.accordionSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {/* Section Header (Title) */}
      <button
        className={clsx([styles.sectionHeader], {
          [styles.active]: isSectionOpen,
        })}
        onClick={toggleSection}
      >
        <Paragraph
          type={mobile ? "medium" : "large"}
          className={styles.sectionTitle}
        >
          {title}
        </Paragraph>
        <motion.div
          className={styles.iconWrapper}
          initial={false}
          animate={{ rotate: isSectionOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isSectionOpen ? (
              <motion.div
                key="minus"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={Minus}
                  alt="close"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={Plus}
                  alt="open"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>

      {/* Questions List */}
      <AnimatePresence initial={false}>
        {isSectionOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.questionsWrapper}
          >
            {questions.map((item, questionIndex) => (
              <div key={questionIndex} className={styles.questionItem}>
                <button
                  className={clsx([styles.questionHeader], {
                    [styles.active]: openQuestionId === questionIndex,
                  })}
                  onClick={() => toggleQuestion(questionIndex)}
                >
                  <Paragraph
                    type={mobile ? "small" : "medium"}
                    className={styles.questionTitle}
                  >
                    {item.question}
                  </Paragraph>
                  <motion.div
                    className={styles.iconWrapperSmall}
                    initial={false}
                    animate={{
                      rotate: openQuestionId === questionIndex ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {openQuestionId === questionIndex ? (
                        <motion.div
                          key="minus"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image
                            src={Minus}
                            alt="close"
                            width={20}
                            height={20}
                            className={styles.icon}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image
                            src={Plus}
                            alt="open"
                            width={20}
                            height={20}
                            className={styles.icon}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openQuestionId === questionIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.answerContent}
                    >
                      <div className={styles.answerInner}>
                        <Paragraph type={mobile ? "small" : "medium"}>
                          {item.answer}
                        </Paragraph>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProductAccordion;
