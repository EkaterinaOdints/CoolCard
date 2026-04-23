import styles from "./styles.module.css";
import Container from "@/src/components/layout/container/Container";
import Title from "@/src/components/ui/title/Title";

const steps = [
  {
    id: 1,
    text: "С помощью нашего конструктора создайте свой\u00A0дизайн",
    imgDesktop: {
      src: "/images/steps/laptop-desktop.png",
      width: 1082,
      height: 448,
    },
    imgMobile: {
      src: "/images/steps/laptop-mobile.png",
      width: 320,
      height: 258,
    },
    imgAlt: "На ноутбуке и смартфоне открыта страница с конструктором карты",
  },
  {
    id: 2,
    text: "Оформите заказ и\u00A0выберите\u00A0способ получения",
    imgDesktop: {
      src: "/images/steps/box-desktop.png",
      width: 445,
      height: 358,
    },
    imgMobile: {
      src: "/images/steps/box-mobile.png",
      width: 158,
      height: 190,
    },
    imgAlt: "Созданная карта упакована в коробку с фирменным логотипом",
  },
  {
    id: 3,
    text: "Получите вашу карту. Наш\u00A0сотрудник поменяет чип с\u00A0вашей\u00A0карты на новую",
    imgDesktop: {
      src: "/images/steps/card-desktop.png",
      width: 445,
      height: 358,
    },
    imgMobile: {
      src: "/images/steps/card-mobile.png",
      width: 158,
      height: 190,
    },
    imgAlt: "Готовая карточка в изумрудном цвете с выгравированной птицей",
  },
];

export default function Steps() {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <Title tag="h2" size="big">
            За 3 простых шага вы сможете получить карту
          </Title>
          <ul className={styles.list}>
            {steps.map(({ id, text, imgDesktop, imgMobile, imgAlt }, index) => {
              const count = (index + 1).toString().padStart(2, "0");

              return (
                <li className={styles.item} key={id}>
                  <div className={styles.itemText}>
                    <div className={styles.itemCount}>
                      <span className={styles.itemCountNumber}>{count}</span>
                      <span className={styles.itemCountText}>Шаг</span>
                    </div>
                    <p className={styles.itemTextContent}>{text}</p>
                  </div>
                  <div className={styles.itemImage}>
                    <picture>
                      <source
                        media="(min-width: 769px)"
                        srcSet={imgDesktop.src}
                        width={imgDesktop.width}
                        height={imgDesktop.height}
                      />
                      <img
                        src={imgMobile.src}
                        width={imgMobile.width}
                        height={imgMobile.height}
                        alt={imgAlt}
                      />
                    </picture>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
