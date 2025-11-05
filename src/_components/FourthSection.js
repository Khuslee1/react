import { Sold } from "@/_components/Sold";

export const FourthSection = () => {
  return (
    <div className="w-full h-[686px] p-10 bg-[#F9FAFB] flex flex-col items-center gap-10 ">
      <div className="h-28 w-full flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-sans font-medium text-xl">Meet the People</h1>
          <h1 className="font-sans font-medium text-xl">Behind the Process</h1>
        </div>
        <p className="font-sans font-normal text-base text-[#4A5565]">
          Our experienced team is dedicated to helping you find your perfect
          home
        </p>
      </div>
      <div className="w-full h-390px flex gap-6 justify-center">
        {sold.map((item, index) => {
          return (
            <Sold
              key={index}
              img={item.img}
              name={item.name}
              occ={item.occ}
              sold={item.sold}
            />
          );
        })}
      </div>
      <div className="bg-[#FF6900] flex justify-center items-center rounded-lg text-white h-9 w-[161.73px] ">
        Meet the team
      </div>
    </div>
  );
};

const sold = [
  {
    img: "/image1.jpg",
    name: "Michael Chen",
    occ: "Senior Real Estate Agent",
    sold: 24,
  },
  {
    img: "/image2.jpg",
    name: "David Martinez",
    occ: "Property Specialist",
    sold: 18,
  },
  {
    img: "/image3.jpg",
    name: "James Wilson",
    occ: "Investment Advisor",
    sold: 32,
  },
  {
    img: "/image4.jpg",
    name: "Robert Thompson",
    occ: "Luxury Home Expert",
    sold: 28,
  },
];
