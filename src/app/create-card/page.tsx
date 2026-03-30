"use client";

import CreateCard from "./create-card/CreateCard";
import FeedbackModal from "@/src/components/ui/feedback-modal/FeedbackModal";
import { useFeedbackModal } from "@/src/providers/FeedbackModalProvider";

export default function CreateCardPage() {
  const { isModalOpen } = useFeedbackModal();

  return (
    <>
      <CreateCard />
      {isModalOpen && <FeedbackModal />}
    </>
  );
}
