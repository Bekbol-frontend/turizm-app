"use client";
import YoutubeImage from "@/shared/assets/youtube/youtube.png";
import Image from "next/image";
import styles from "./YoutubeBtn.module.scss";
import { Modal } from "@/shared/ui/Modal";
import { useCallback, useState } from "react";

interface IProps {
  user_name: string;
  link: string;
}

function YoutubeBtn({ user_name, link }: IProps) {
  const [modal, setModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  return (
    <>
      <span className={styles.spanYoutube} onClick={onShowModal}>
        <Image src={YoutubeImage} alt={user_name} width={60} height={48} />
      </span>

      <Modal lazy isOpen={modal} onClose={onCloseModal} title="Reviews video">
        <div className={styles.modalBody}>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/-PJ30prZxKQ?si=SLh3MVoFEWguUApF"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{
              border: "none",
              borderRadius: "6px",
            }}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
}

export default YoutubeBtn;
