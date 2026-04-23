import styles from "./styles.module.css";
import Container from "@/src/components/layout/container/Container";
import Title from "@/src/components/ui/title/Title";
import Accordion from "@/src/components/ui/accordion/Accordion";
import Button from "@/src/components/ui/button/Button";

const faq = [
  {
    id: 1,
    title: "Как происходит апгрейд карты?",
    content: "Используем прочный металл, обеспечивая долговечность вашей карты Используем прочный металл, обеспечивая долговечность вашей карты Используем прочный металл, обеспечивая долговечность вашей карты Используем прочный металл, обеспечивая долговечность вашей карты",
  },
  {
    id: 2,
    title: "Новая карта сохранит прежний функционал?",
    content: "Используем прочный металл, обеспечивая долговечность вашей карты",
  },
  {
    id: 3,
    title: "Сколько времени ждать новую карту?",
    content: "Используем прочный металл, обеспечивая долговечность вашей карты Используем прочный металл, обеспечивая долговечность вашей карты",
  },
];

export default function Faq() {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <Title className={styles.title} tag="h2" size="small">
            Вопрос-ответ
          </Title>
          <div className={styles.accordionWrapper}>
            {faq.map(({ id, title, content }) => {
              return <Accordion title={title} content={<p>{content}</p>} key={id} />;
            })}
          </div>
          <Button className={styles.button} tag="a" src="#" variant="big" color="light">
            Смотреть больше вопросов
          </Button>
        </div>
      </Container>
    </section>
  );
}
