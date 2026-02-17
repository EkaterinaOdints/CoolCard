"use client";

import styles from "./styles.module.css";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const benefits = [
  {
    id: "style",
    title: "Стиль",
    desc: "Превратите вашу скучную пластиковую карту, в стильную металлическую с любым дизайном",
  },
  {
    id: "constructor",
    title: "Конструктор",
    desc: "Наш конструктор позволяет вам создать уникальный дизайн быстро и легко",
  },
  {
    id: "deadlines",
    title: "Сроки",
    desc: "Ваша карта будет изготовлена всего за 2-3 дня после оформления заказа",
  },
];

export default function Benefits() {
  return (
    <div className={styles.root}>
      <Swiper
        className={styles.slider}
        enabled={false}
        breakpoints={{
          0: {
            enabled: true,
            slidesPerView: 1.2,
            spaceBetween: 10,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
          },
          577: {
            enabled: true,
            slidesPerView: 1.5,
            spaceBetween: 20,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
          },
          769: {
            enabled: false,
            slidesPerView: "auto",
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            spaceBetween: 0,
          },
        }}
      >
        {benefits.map(({ id, title, desc }) => {
          const className = id[0].toUpperCase() + id.slice(1);

          return (
            <SwiperSlide className={classNames(styles.item, styles[`item${className}`])} key={id}>
              <span className={styles.itemTitle}>{title}</span>
              <p className={styles.itemText}>{desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
