import Container from "@/src/components/layout/container/Container";
import Title from "@/src/components/ui/title/Title";
import Button from "@/src/components/ui/button/Button";
import Benefits from "@/src/components/shared/benefits/Benefits";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function Hero() {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.banner}>
              <Title className={styles.bannerTitle} tag="h1" size="big">
                Тюнинг ателье банковских карт
              </Title>
              <p className={styles.bannerText}>Сделаем из обычной карты металлическую с&nbsp;уникальным дизайном</p>
              <div className={styles.bannerImage}>
                <picture>
                  <source media="(min-width: 769px)" srcSet="/images/hero/banner-desktop.svg" width={567} height={368} />
                  <img src="/images/hero/banner-mobile.svg" width={267} height={228} alt="Черная карта с надписью: Крутая карта" />
                </picture>
              </div>
              <Button className={styles.bannerButton} tag="a" size="big" color="accent" src="#">
                Создать карту
              </Button>
            </div>
            <div className={styles.subbanner}>
              <p className={styles.subbannerText}>Эксклюзивные дизайнерские решения и&nbsp;большой выбор цветов</p>
              <div className={styles.subbannerImage}>
                <picture>
                  <source media="(min-width: 769px)" srcSet="/images/hero/subbanner-desktop.png" width={507} height={429} />
                  <img src="/images/hero/subbanner-mobile.png" width={155} height={118} alt="Карты с ярким дизаном" />
                </picture>
              </div>
            </div>
            <ul className={styles.featuresList}>
              <li className={classNames(styles.feature, styles.featureMaterial)}>Используем прочный металл, обеспечивая долговечность вашей карты</li>
              <li className={classNames(styles.feature, styles.featureSafety)}>Гарантируем безопасность и конфиденциальность данных карты. Сборка происходит при вас</li>
            </ul>
          </div>
          <Benefits />
        </div>
      </Container>
    </section>
  );
}
