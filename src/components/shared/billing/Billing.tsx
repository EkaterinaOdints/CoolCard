import styles from "./styles.module.css";
import type { FormValues } from "@/src/app/create-card/create-card/types";

import { type Path } from "react-hook-form";

import CloseButton from "@/src/components/ui/close-button/CloseButton";

import { prices } from "@/src/data/data";

interface Props {
  selectedPayingOptions?: Path<FormValues>[];
  removeOptionFromSelectedPaying?: (optionName: Path<FormValues>) => void;
}

export default function Billing(props: Props) {
  const { selectedPayingOptions, removeOptionFromSelectedPaying } = props;

  const formatPrice = (price: string | undefined) => {
    if (!price) return;
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const selectedItems =
    selectedPayingOptions
      ?.map((optionName) => {
        return prices.find((priceItem) => {
          return priceItem.id === optionName;
        });
      })
      .filter((item) => item !== undefined) ?? [];

  const totalPrice = selectedItems.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

  return (
    <div className={styles.root}>
      <div className={styles.pricing}>
        <h2 className={styles.title}>Стоимость</h2>
        <ul className={styles.list}>
          {selectedItems.map((option) => {
            return (
              <li className={styles.item} key={option.id}>
                <span className={styles.itemTitle}>{option.title}</span>
                <div className={styles.itemWrapper}>
                  <span className={styles.itemPrice}>{formatPrice(option.price)} ₽</span>
                  <CloseButton
                    className={styles.itemCloseButton}
                    ariaLabel="Удалить"
                    onClick={() => removeOptionFromSelectedPaying?.(option.id)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.total}>
        <h2 className={styles.title}>Итог:</h2>
        <span className={styles.totalPrice}>{formatPrice(String(totalPrice))} ₽</span>
      </div>
    </div>
  );
}
