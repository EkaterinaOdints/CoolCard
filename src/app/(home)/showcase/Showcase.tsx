"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { type Design } from "./types";
import Container from "@/src/components/layout/container/Container";
import Title from "@/src/components/ui/title/Title";
import Card from "@/src/components/ui/card/Card";
import { colors, pictures } from "@/src/data/data";

import { useRef } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

const designs: Design[] = [
  {
    id: "1",
    colorName: "Ocean Green",
    pictureName: "mountains",
  },
  {
    id: "2",
    colorName: "Oyster Pink",
    pictureName: "animals",
  },
  {
    id: "3",
    colorName: "Gradient Dark Tangerine",
    pictureName: "sight",
  },
  {
    id: "4",
    colorName: "Red",
    pictureName: "cars",
  },
  {
    id: "5",
    colorName: "Cornflower Blue",
    pictureName: "bird",
  },
  {
    id: "6",
    colorName: "Gradient Dark Tangerine",
    pictureName: "egypt",
  },
  {
    id: "7",
    colorName: "Violet",
    pictureName: "flowers",
  },
  {
    id: "8",
    colorName: "Oyster Pink",
    pictureName: "mountains",
  },
  {
    id: "9",
    colorName: "Cobalt",
    pictureName: "figures",
  },
  {
    id: "10",
    colorName: "Oyster Pink",
    pictureName: "cars",
  },
  {
    id: "11",
    colorName: "Gradient Bright Turquoise",
    pictureName: "egypt",
  },
];

export default function Showcase() {
  const sliderButonPrevRef = useRef<HTMLButtonElement>(null);
  const sliderButonNextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <Title tag="h2" size="small">
            Наши дизайны
          </Title>
          <div className={styles.sliderNav}>
            <button className={classNames(styles.sliderButton, styles.sliderButtonPrev)} type="button" aria-label="Назад" ref={sliderButonPrevRef}></button>
            <button className={classNames(styles.sliderButton, styles.sliderButtonNext)} type="button" aria-label="Вперед" ref={sliderButonNextRef}></button>
          </div>
          <div className={styles.sliderWrapper}>
            <Swiper
              modules={[Grid, Navigation]}
              navigation
              className={styles.slider}
              onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation = {
                    ...swiper.params.navigation,
                    prevEl: sliderButonPrevRef.current,
                    nextEl: sliderButonNextRef.current,
                  };
                }
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: "auto",
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: "auto",
                  spaceBetween: 26,
                },
                1600: {
                  slidesPerView: "auto",
                  spaceBetween: 36,
                },
              }}
            >
              {designs.map(({ id, colorName, pictureName }) => {
                const color = colors.find((item) => item.name === colorName);
                const picture = pictures.find((item) => item.name === pictureName);

                if (!color || !picture) return;

                return (
                  <SwiperSlide className={styles.item} key={id}>
                    <Link className={styles.itemLink} href="#">
                      <Card className={styles.itemCard} imgSrc={picture.src} imgAlt={picture.alt} imgWidth={506} imgHeight={319} size="medium" style={color.style} />
                      <div className={styles.itemButton}>
                        <span className={styles.itemButtonIcon}></span>
                        <span className={styles.itemButtonText}>Выбрать этот дизайн</span>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
