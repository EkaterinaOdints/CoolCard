import styles from "./styles.module.css";
import { type FeedbackStatus } from "./types";
import { type FormValues } from "@/src/components/ui/form/feedbackForm/types";
import classNames from "classnames";
import FeedbackForm from "@/src/components/ui/form/feedbackForm/FeedbackForm";
import Button from "@/src/components/ui/button/Button";
import { sendFeedbackForm } from "@/src/api/feedbackForm";
import { useFeedbackModal } from "@/src/providers/FeedbackModalProvider";
import { useOutsideClickClose } from "@/src/hooks/useOutsideClickClose";
import { useEscClickClose } from "@/src/hooks/useEscClickClose";
import { useRef, useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

export default function FeedbackModal() {
  const { isModalOpen, setModalOpen } = useFeedbackModal();
  const modalWrapperRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<FeedbackStatus>("form");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      feedbackMethod: "whatsApp",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setStatus("sending");

      await sendFeedbackForm(data);

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  useEscClickClose({
    isOpen: isModalOpen,
    onClose: () => setModalOpen(false),
  });

  useOutsideClickClose({
    elRef: modalWrapperRef,
    isOpen: isModalOpen,
    onClose: () => setModalOpen(false),
  });

  const renderModalInner = () => {
    switch (status) {
      case "success":
        return (
          <>
            <span className={styles.title} id="feedback-modal-title">
              Спасибо!
            </span>
            <p className={styles.text}>В ближайшее время наши специалисты свяжутся с вами</p>
          </>
        );
      case "error":
        return (
          <>
            <span className={styles.title} id="feedback-modal-title">
              Ошибка отправки формы
            </span>
            <p className={styles.text}>Отправка данных завершилась с ошибкой.</p>
            <Button tag="button" size="small" color="gradient" className={styles.button} onButtonClick={() => setStatus("form")}>
              Вернуться к форме
            </Button>
          </>
        );
      default:
        return (
          <>
            <span className={styles.title} id="feedback-modal-title">
              Выберите способ для связи
            </span>
            <FeedbackForm status={status} isValid={isValid} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors}></FeedbackForm>
          </>
        );
    }
  };

  return (
    <div className={styles.root} role="dialog" aria-modal="true" aria-labelledby="feedback-modal-title">
      <div className={classNames(styles.wrapper, status === "error" && styles.error)} ref={modalWrapperRef}>
        <button className={styles.closeButton} type="button" aria-label="Закрыть окно" onClick={() => setModalOpen(false)}></button>
        {renderModalInner()}
      </div>
    </div>
  );
}
