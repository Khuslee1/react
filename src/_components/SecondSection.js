import { SecondComponent } from "@/_components/SecondComponent";
export const SecondSection = () => {
  return (
    <div className="bg-[#F9FAFB] w-screen h-[474px] flex flex-col gap-12 py-10 px-40">
      <div className="h-28 w-full flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-sans font-medium text-xl">
            Buying Doesn't Have to
          </h1>
          <h1 className="font-sans font-medium text-xl">Be Overwhelming</h1>
        </div>
        <p className="font-sans font-normal text-base text-[#4A5565]">
          Our streamlined process makes finding your dream home simple and
          stress-free
        </p>
      </div>
      <div className="w-fill h-[246px] flex gap-8 flex-wrap flex-row justify-center">
        {second.map((item, i) => {
          return (
            <SecondComponent
              key={i}
              num={item.num}
              head={item.head}
              p={item.p}
            />
          );
        })}
      </div>
    </div>
  );
};
const second = [
  {
    num: "1",
    head: "Browse Curated Homes",
    p: "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information.",
  },
  {
    num: "3",
    head: " Get Expert Advice",
    p: "Connect with experienced agents who understand the market and can guide you through every step of your home-buying journey.",
  },
  {
    num: "2",
    head: "Build a Tour",
    p: "Schedule viewings at your convenience and visit multiple properties in one trip. Our team coordinates everything to save you time.",
  },
  {
    num: "4",
    head: "Offer & Close",
    p: "Make confident offers with our support and navigate the closing process smoothly. We handle the paperwork so you can focus on moving in.",
  },
];
