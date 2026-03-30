"use client";

import Hero from "./hero/Hero";
import Pricing from "./pricing/Pricing";
import Showcase from "./showcase/Showcase";
import Steps from "./steps/Steps";
import Faq from "./faq/Faq";
import Feedback from "./feedback/Feedback";
import FeedbackModal from "@/src/components/ui/feedback-modal/FeedbackModal";
import { useFeedbackModal } from "@/src/providers/FeedbackModalProvider";

export default function Home() {
  const { isModalOpen } = useFeedbackModal();

  return (
    <>
      <Hero />
      <Pricing />
      <Showcase />
      <Steps />
      <Faq />
      <Feedback />
      {isModalOpen && <FeedbackModal />}
    </>
  );
}
