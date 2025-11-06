import { ThirdComponent } from "@/_components/ThirdComponent";
import { Butt } from "@/_components/Butt";
export const ThirdSection = () => {
  return (
    <div className="w-screen h-[972px] flex flex-col gap-10 px-20 items-center">
      <div className="w-full flex flex-col gap-8 items-center">
        <p className="font-sans text-base text-[#0A0A0A] font-normal">
          Explore Properties
        </p>
        <div className="flex h-9 w-full justify-center gap-2">
          <Butt key={2} text={"House"} size={"text-[14px] rounded-full"} />

          <Butt
            key={3}
            text={"Villa"}
            size={
              "text-[14px] rounded-full border border-[#0000001A] bg-white text-black"
            }
          />
          <Butt
            key={4}
            text={"Apartment"}
            size={
              "text-[14px] rounded-full border border-[#0000001A] bg-white text-black"
            }
          />
        </div>
      </div>
      <div className="w-7xl h-[764px] flex flex-wrap gap-7 justify-center ">
        {third.map((item, i) => {
          return (
            <ThirdComponent
              key={i}
              img={item.img}
              price={item.price}
              name={item.name}
              bednum={item.bednum}
              bathnum={item.bathnum}
              sq={item.sq}
              tag={item.tag}
              tagName={item.tagName}
            />
          );
        })}
      </div>
      <Butt key={1} text="Load more Listing" />
    </div>
  );
};

const third = [
  {
    img: "/img1.jpg",
    price: "$216,000",
    name: "Piney Hills",
    bednum: "4",
    bathnum: "2",
    sq: "2,157",
    tag: true,
    tagName: "POPULAR",
  },
  {
    img: "/img2.jpg",
    price: "$450,000",
    name: "River Oak",
    bednum: "2",
    bathnum: "2",
    sq: "1,800",
    tag: false,
  },
  {
    img: "/img3.jpg",
    price: "$318,000",
    name: "Maple Glen",
    bednum: "5",
    bathnum: "3",
    sq: "2,850",
    tag: true,
    tagName: "NEW LISTING",
  },
  {
    img: "/img4.jpg",
    price: "$315,000",
    name: "Forest Hill",
    bednum: "4",
    bathnum: "2",
    sq: "2,200",
    tag: false,
  },
  {
    img: "/img5.jpg",
    price: "$295,000",
    name: "Cedar Park",
    bednum: "3",
    bathnum: "2",
    sq: "1650",
    tag: false,
  },
  {
    img: "/img6.jpg",
    price: "$425,000",
    name: "Willow Greek",
    bednum: "4",
    bathnum: "3",
    sq: "2,650",
    tag: false,
  },
];
