import styles from "./styles.module.css";

const social = [
  {
    id: "whatsapp",
    src: "#",
  },
  {
    id: "instagram",
    src: "#",
  },
  {
    id: "telegram",
    src: "#",
  },
  {
    id: "vkontakte",
    src: "#",
  },
];

export default function SocialList() {
  return (
    <div className={styles.root}>
      {social.map(({ id, src }) => {
        return (
          <a className={styles.link} href={src} key={id}>
            <span className="visually-hidden">{id}</span>
            <svg width="20" height="20" aria-hidden="true">
              <use href={`/sprite.svg#${id}`}></use>
            </svg>
          </a>
        );
      })}
    </div>
  );
}
