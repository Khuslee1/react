import { Sold } from "@/_components/Sold";
import { Butt } from "@/_components/Butt";
import { Header } from "@/_components/Header";

export const FourthSection = () => {
  return (
    <div className="w-full h-[686px] p-10 bg-[#F9FAFB] flex flex-col items-center gap-10 ">
      <Header
        head={["Meet the People", "Behind the Process"]}
        text={
          "Our experienced team is dedicated to helping you find your perfect home"
        }
        tex={"text-[16px]"}
        title={"text-[20px]"}
      />
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
      <Butt text="Meet the Team" />
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
