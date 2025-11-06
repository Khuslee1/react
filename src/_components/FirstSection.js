import { First } from "@/_components/FirstComponent";
import { Butt } from "@/_components/Butt";
import { Header } from "@/_components/Header";

export const FirstSection = () => {
  return (
    <div className="h-[590px] w-[1280px] flex flex-col gap-10 py-16 px-16 bg-white items-center">
      <Header
        head={["Smart Tools", "Real Experts, Easy Moves"]}
        text={"Your journey to finding the perfect home starts here"}
        tex={"text-[20px]"}
        title={"text-[24px]"}
      />
      <div className="flex gap-6 h-[234px] w-full">
        {firsts.map((item, index) => {
          return (
            <First key={index} img={item.img} head={item.head} p={item.p} />
          );
        })}
      </div>
      <Butt key={1} text={text} />
    </div>
  );
};
const text = "Get Started";
const firsts = [
  {
    img: "/Icon1.png",
    head: "Top-end Curation",
    p: "Carefully selected properties that meet our high standards of quality",
  },
  {
    img: "/Icon2.png",
    head: "Personalized Insight",
    p: "Expert guidance tailored to your unique needs and preferences",
  },
  {
    img: "/Icon3.png",
    head: "Transaction Moving",
    p: "Streamlined process from viewing to closing with dedicated supports",
  },
];
