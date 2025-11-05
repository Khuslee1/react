import { First } from "@/_components/FirstComponent";

export const FirstSection = () => {
  return (
    <div className="h-[590px] w-screen flex flex-col gap-10 py-16 px-16 bg-white items-center">
      <div className="h-28 w-full flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-sans font-medium text-2xl">Smart Tools</h1>
          <h1 className="font-sans font-medium text-2xl">
            Real Experts, Easy Moves
          </h1>
        </div>
        <p className="font-sans font-normal text-base text-[#4A5565]">
          Your journey to finding the perfect home starts here
        </p>
      </div>
      <div className="flex gap-6 h-[234px] w-full">
        {firsts.map((item, index) => {
          return (
            <First key={index} img={item.img} head={item.head} p={item.p} />
          );
        })}
      </div>
      <div className="bg-[#FF6900] flex justify-center items-center rounded-lg text-white h-9 w-[140.34px]">
        Get Started
      </div>
    </div>
  );
};

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
