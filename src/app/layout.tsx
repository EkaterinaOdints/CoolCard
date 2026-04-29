import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { WindowWidthProvider } from "@/src/providers/WindowWidthProvider";
import { FeedbackModalProvider } from "@/src/providers/FeedbackModalProvider";
import Header from "@/src/components/layout/header/Header";
import Footer from "@/src/components/layout/footer/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "CoolCard - %s",
    default: "CoolCard",
  },
  description: "CoolCard - Тюнинг ателье банковских карт",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nunito.variable} antialiased`}>
        <WindowWidthProvider>
          <FeedbackModalProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </FeedbackModalProvider>
        </WindowWidthProvider>
      </body>
    </html>
  );
}
