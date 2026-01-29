"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Accordion.module.scss";
import { useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import { Paragraph } from "../../Paragraph";
import { useResponsive } from "@/shared/lib/useResponsive";
import Image from "next/image";
import Plus from "@/shared/assets/icons/add-line.svg";
import Minus from "@/shared/assets/icons/subtract-line.svg";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface IProps {
  data: AccordionItem;
}

function Accordion({ data }: IProps) {
  const { id, title, content } = data;
  const [openId, setOpenId] = useState<number | null>(null);

  const { mobile } = useResponsive();

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div
      className={styles.accordionItem}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: id * 0.1 }}
    >
      <button
        className={clsx([styles.accordionHeader], {
          [styles.active]: openId === id,
        })}
        onClick={() => toggleAccordion(id)}
      >
        <Paragraph
          type={mobile ? "medium" : "large"}
          className={styles.accordionTitle}
        >
          {title}
        </Paragraph>
        <motion.div
          className={styles.iconWrapper}
          initial={false}
          animate={{ rotate: openId === id ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {openId === id ? (
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

      <AnimatePresence initial={false}>
        {openId === id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.accordionContent}
          >
            <div className={styles.accordionInner}>
              <Paragraph type={mobile ? "small" : "medium"}>
                {content}
              </Paragraph>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Accordion;
