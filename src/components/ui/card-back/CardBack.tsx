import styles from "./styles.module.css";
import classNames from "classnames";

interface Props {
  className?: string;
  style: string;
  cardNumber?: string;
  cardPeriod?: string;
}

export default function CardBack(props: Props) {
  const { className, style, cardNumber, cardPeriod } = props;

  const completedNumber = (cardNumber ?? "").replace(/\D/g, "").slice(0, 16);

  const formattedCompletedNumber = completedNumber.replace(/(.{4})/g, "$1 ").trimEnd();

  const formattedFullDefaultNumber = "0000000000000000".replace(/(.{4})/g, "$1 ").trimEnd();

  const formattedDefaultNumber = formattedFullDefaultNumber.slice(formattedCompletedNumber.length);

  const completedPeriod = (cardPeriod ?? "").replace(/\D/g, "").slice(0, 4);

  const formattedCompletedPeriod = completedPeriod.replace(/(\d{2})(\d{0,2})/, (_, m, y) => {
    return y ? `${m}/${y}` : m;
  });

  const formattedFullDefaultPeriod = "0000".replace(/(\d{2})(\d{0,2})/, (_, m, y) => {
    return y ? `${m}/${y}` : m;
  });

  const formattedDefaultPeriod = formattedFullDefaultPeriod.slice(formattedCompletedPeriod.length);

  return (
    <div className={classNames(className, styles.root)}>
      <div className={styles.color} style={{ background: style }}></div>
      <div className={styles.content}>
        <div className={styles.data}>
          <span className={styles.dataNumber}>
            <span className={styles.dataNumberCompleted}>{formattedCompletedNumber}</span>
            <span className={styles.dataNumberDefault}>{formattedDefaultNumber}</span>
          </span>
          <span className={styles.dataPeriod}>
            <span className={styles.dataPeriodCompleted}>{formattedCompletedPeriod}</span>
            <span className={styles.dataPeriodDefault}>{formattedDefaultPeriod}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
