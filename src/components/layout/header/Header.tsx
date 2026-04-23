"use client";

import Container from "@/src/components/layout/container/Container";
import Button from "@/src/components/ui/button/Button";
import Navigation from "@/src/components/shared/navigation/Navigation";
import Logo from "@/src/components/ui/logo/Logo";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <Logo onLogoClick={closeMenu} />
          <Navigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
          <div className={styles.buttons}>
            <Button
              className={classNames(styles.button, styles.cartButton)}
              onClick={closeMenu}
              tag="button"
              variant="small"
              color="light"
            >
              <svg width="30" height="30" aria-hidden="true">
                <use href="/sprite.svg#cart"></use>
              </svg>
              <span className={styles.buttonText}>Корзина</span>
            </Button>
            <Button
              className={classNames(styles.button, styles.buyButton)}
              tag="a"
              src="/create-card"
              variant="small"
              color="gradient"
            >
              Создать карту
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
