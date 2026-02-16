import styles from "./styles.module.css";
import Container from "@/src/components/layout/container/Container";
import Title from "@/src/components/ui/title/Title";
import Button from "@/src/components/ui/button/Button";

const priceList = [
  {
    id: "metalCard",
    title: "Металлическая карта",
    price: "2 990",
    icon: "stars",
  },
  {
    id: "engravedCard",
    title: "Карта с гравировкой",
    price: "3 990",
    icon: "screwdriver",
  },
  {
    id: "individualDesign",
    title: "Индивидуальный дизайн",
    price: "5 990",
    icon: "services",
  },
  {
    id: "NFCCard",
    title: "Карта с NFC",
    price: "9 990",
    icon: "wifi",
  },
];

export default function Pricing() {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <Title className={styles.title} tag="h2" style="big">
            {/* prettier-ignore */}
            <>
              Создаём&nbsp;<span className={styles.titleIcon}><svg width="30" height="30" aria-hidden="true"><use href={`/sprite.svg#stars-gradient`}></use></svg></span>
              индивидуальный дизайн платёжных&nbsp;<span className={styles.titleIcon}><svg width="90" height="90" aria-hidden="true"><use href={`/sprite.svg#wifi-gradient`}></use></svg></span>&nbsp;
              карт
            </>
          </Title>
          <ul className={styles.list}>
            {priceList.map(({ id, title, price, icon }) => {
              return (
                <li className={styles.item} key={id}>
                  <div className={styles.itemIcon}>
                    <svg width="40" height="40" aria-hidden="true">
                      <use href={`/sprite.svg#${icon}`}></use>
                    </svg>
                  </div>
                  <h3 className={styles.itemTitle}>{title}</h3>
                  <span className={styles.itemPrice}>{price} ₽</span>
                </li>
              );
            })}
          </ul>
          <div className={styles.promo}>
            <p className={styles.promoText}>Прямо сейчас вы можете создать собственный шедевр и получить эксклюзивную карту!</p>
            <Button className={styles.promoButton} tag="a" src="#" size="big" color="accent">
              Создать карту
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
