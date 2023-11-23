import { LayoutMain } from "components/layout/LayoutMain";
import { Banner, AboutUs, OurService, MarketCard, ContactUs } from "components/section";

export default function Home() {
  return (
    <LayoutMain>
      <Banner />
      <MarketCard />
      <AboutUs />
      <OurService />
      <ContactUs />
    </LayoutMain>
  );
}
