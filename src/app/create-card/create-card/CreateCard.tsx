import styles from "./styles.module.css";
import Container from "@/src/components/layout/container/Container";
import Title from "@/src/components/ui/title/Title";
import Button from "@/src/components/ui/button/Button";

export default function CreateCard() {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Button tag="button" variant="nav" color="light" aria-label="Назад" isBackButton></Button>
            <Title tag="h1">Создание карты</Title>
          </div>
        </div>
      </Container>
    </section>
  );
}
