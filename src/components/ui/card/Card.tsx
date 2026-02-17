import Image from "next/image";
import styles from "./styles.module.css";
import classNames from "classnames";

interface Props {
  className?: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  size: "small" | "medium" | "big";
  style: string;
}

export default function Card(props: Props) {
  const { className, imgSrc, imgAlt, imgWidth, imgHeight, size, style } = props;

  return (
    <div className={classNames(className, styles.root, size && styles[size])}>
      <div className={styles.color} style={{ background: style }}>
        <Image className={styles.image} src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </div>
    </div>
  );
}
