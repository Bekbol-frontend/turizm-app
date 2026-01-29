import { Container } from "@/shared/ui/Container";
import styles from "./FAQ.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { Accordion } from "@/shared/ui/Accordion";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "Xizmatlaringiz haqida ma'lumot",
    content:
      "Biz professional veb-saytlar, mobil ilovalar va dizayn xizmatlari taqdim etamiz. Har bir loyiha zamonaviy texnologiyalar va eng yaxshi amaliyotlar asosida amalga oshiriladi.",
  },
  {
    id: 2,
    title: "Qancha vaqt kerak bo'ladi?",
    content:
      "Loyihaning murakkabligiga qarab 2 haftadan 3 oygacha vaqt ketishi mumkin. Aniq muddatlar loyiha boshida kelishib olinadi.",
  },
  {
    id: 3,
    title: "Narxlar qanday?",
    content:
      "Narxlar loyihaning hajmi va murakkabligiga bog'liq. Minimal loyihalar uchun narx $500 dan boshlanadi. Batafsil ma'lumot uchun biz bilan bog'laning.",
  },
  {
    id: 4,
    title: "Qo'llab-quvvatlash bormi?",
    content:
      "Ha, biz barcha loyihalarimiz uchun 6 oylik bepul qo'llab-quvvatlash taqdim etamiz. Keyinchalik oylik yoki yillik paketlarni tanlay olasiz.",
  },
];

function FAQ() {
  return (
    <>
      <SectionTitle title="FAQ" />
      <section className={styles.section}>
        <Container>
          <div className={styles.accordionList}>
            {accordionData.map((item) => (
              <Accordion data={item} key={item.id} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default FAQ;
