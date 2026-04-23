import styles from "./styles.module.css";
import Container from "@/src/components/layout/container/Container";
import Title from "@/src/components/ui/title/Title";
import Button from "@/src/components/ui/button/Button";

export default function Feedback() {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <Title className={styles.title} tag="h2" size="small">
              Остались вопросы?
            </Title>
            <p className={styles.description}>
              Мы готовы на них ответить и помочь вам создать идеальную карту, которая будет
              соответствовать вашим предпочтениям
            </p>
            <Button
              className={styles.button}
              tag="button"
              variant="big"
              color="gradient"
              isModalOpener
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
