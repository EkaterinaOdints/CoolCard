"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: "about",
    src: "/about",
    text: "О нас",
  },
  {
    id: "contacts",
    src: "#",
    text: "Контакты",
  },
  {
    id: "partnership",
    src: "#",
    text: "Станьте партнером",
  },
  {
    id: "faq",
    src: "#",
    text: "Вопрос-ответ",
  },
];

interface Props {
  className?: string;
  onLinkClick?: () => void;
}

export default function NavList(props: Props) {
  const { className, onLinkClick } = props;

  const currentPath = usePathname();

  return (
    <div className={className}>
      {links.map((link) => {
        return (
          <Link href={link.src} key={link.id} aria-current={currentPath === link.src ? "page" : undefined} onClick={() => onLinkClick?.()}>
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
