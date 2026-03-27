import { type FormValues } from "@/src/components/ui/form/feedbackForm/types";

export const sendFeedbackForm = async (data: FormValues) => {
  const response = await fetch("https://0bd9cac4-eaa6-46a6-94d5-75b003a95f35.mock.pstmn.io", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Не удалось отправить форму");
  }

  return response;
};
