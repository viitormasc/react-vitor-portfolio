import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import TechSection from "@/components/TechSection";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <TechSection />
      <PortfolioSection />
      <Footer />
    </DefaultLayout>
  );
}
