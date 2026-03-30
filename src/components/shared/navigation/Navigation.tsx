import styles from "./styles.module.css";
import classNames from "classnames";
import MenuButton from "@/src/components/ui/menu-button/MenuButton";
import NavList from "@/src/components/shared/nav-list/NavList";
import { useState, useRef, useEffect } from "react";
import { useEscClickClose } from "@/src/hooks/useEscClickClose";
import { useBodyClickClose } from "@/src/hooks/useBodyClickClose";
import { useWindowWidthValue } from "@/src/providers/WindowWidthProvider";

interface Props {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeMenu: () => void;
}

export default function Navigation(props: Props) {
  const { isMenuOpen, setMenuOpen, closeMenu } = props;

  const [listHeight, setListHeight] = useState<number>(0);

  const windowWidth = useWindowWidthValue();
  const isMobile = windowWidth !== null && windowWidth <= 1024;
  const listRef = useRef<HTMLDivElement | null>(null);
  const listHeightStyle = isMobile ? { height: isMenuOpen ? `${listHeight}px` : "0px" } : undefined;

  useEscClickClose({
    enabled: isMobile,
    isOpen: isMenuOpen,
    onClose: () => setMenuOpen(false),
  });

  useBodyClickClose({
    enabled: isMobile,
    isOpen: isMenuOpen,
    onClose: () => setMenuOpen(false),
  });

  useEffect(() => {
    if (!isMenuOpen) return;
    if (!isMobile) return;
    if (!listRef.current) return;

    const list = listRef.current;

    const menuObserver = new ResizeObserver(() => {
      setListHeight(list.scrollHeight);
    });

    menuObserver.observe(list);

    setListHeight(list.scrollHeight);

    return () => menuObserver.disconnect();
  }, [isMenuOpen, isMobile]);

  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }

    return () => document.body.classList.remove("overlay");
  }, [isMobile, isMenuOpen]);

  function onMenuButtonClick() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav className={classNames(styles.root, { [styles.isMenuOpenned]: isMenuOpen && isMobile })}>
      <MenuButton className={styles.menuButton} ariaLabel={isMenuOpen ? "Закрыть меню" : "Открыть меню"} ariaExpanded={isMobile ? isMenuOpen : undefined} onButtonClick={onMenuButtonClick} isMenuOpenned={isMenuOpen && isMobile} />
      <div className={styles.listWrapper} style={listHeightStyle} ref={listRef}>
        <NavList className={styles.list} onLinkClick={closeMenu} />
      </div>
    </nav>
  );
}
