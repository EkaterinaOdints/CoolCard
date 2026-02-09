import Container from "@/src/components/layout/container/Container";
import styles from "./styles.module.css";
import Logo from "@/src/components/ui/logo/Logo";
import NavList from "@/src/components/shared/navList/NavList";
import Button from "@/src/components/ui/button/Button";
import SocialList from "@/src/components/shared/socialList/SocialList";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <Logo className={styles.logo} />
            <span className={styles.logoText}>Тюнинг ателье банковских карт</span>
          </div>
          <NavList className={styles.navList} />
          <div className={styles.buttons}>
            <Button tag="button" size="small" color="light" className={styles.button}>
              Написать
            </Button>
            <SocialList />
          </div>
          <div className={styles.divider} aria-hidden="true"></div>
          <span className={styles.copyright}>
            ©&nbsp;2025–
            {new Date().getFullYear()}
            &ensp;ООО&nbsp;«Крутая&nbsp;карта»
          </span>
          <a className={styles.policy} href="#">
            Политика конфиденциальности
          </a>
          <a className={styles.offer} href="#">
            Публичная оферта
          </a>
        </div>
      </Container>
    </footer>
  );
}
