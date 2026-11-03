import { lazy, Suspense } from "react";

import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import TechSection from "@/components/TechSection";
import { useMode } from "@/context/mode";
import DefaultLayout from "@/layouts/default";

const FunnyPortfolio = lazy(() => import("@/funny/FunnyPortfolio"));

export default function IndexPage() {
  const { mode } = useMode();

  if (mode === "funny") {
    return (
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center bg-yellow-200 text-2xl font-bold text-black">
            loading the fun... 🤡
          </div>
        }
      >
        <FunnyPortfolio />
      </Suspense>
    );
  }

  return (
    <DefaultLayout>
      <Hero />
      <TechSection />
      <PortfolioSection />
      <Footer />
    </DefaultLayout>
  );
}
