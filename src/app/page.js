import { FirstSection } from "@/_components/FirstSection";
import { SecondSection } from "@/_components/SecondSection";
import { ThirdSection } from "@/_components/ThirdSection";
import { FourthSection } from "@/_components/FourthSection";
import { FifthSection } from "@/_components/FifthSection";
import { SixthSection } from "@/_components/SixthSecton";
import { SeventhSection } from "@/_components/SeventhSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[107px] items-center">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
}
