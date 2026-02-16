"use client";

import styles from "./styles.module.css";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        <SwiperSlide className={classNames(styles.item, styles.itemStyle)}>
          <span className={styles.itemTitle}>Стиль</span>
          <p className={styles.itemText}>Превратите вашу скучную пластиковую карту, в стильную металлическую с любым дизайном</p>
        </SwiperSlide>
        <SwiperSlide className={classNames(styles.item, styles.itemConstructor)}>
          <span className={styles.itemTitle}>Конструктор</span>
          <p className={styles.itemText}>Наш конструктор позволяет вам создать уникальный дизайн быстро и легко</p>
        </SwiperSlide>
        <SwiperSlide className={classNames(styles.item, styles.itemDeadlines)}>
          <span className={styles.itemTitle}>Сроки</span>
          <p className={styles.itemText}>Ваша карта будет изготовлена всего за 2-3 дня после оформления заказа</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
