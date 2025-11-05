import { MapComponent } from "@/_components/MapComponent";

export const FifthSection = () => {
  return (
    <div className="h-[152px] w-[1064.99px] flex gap-8">
      {info.map((item, i) => {
        return (
          <MapComponent key={i} img={item.img} head={item.head} pa={item.pa} />
        );
      })}
    </div>
  );
};

const info = [
  {
    img: "/con1.png",
    head: "Find your dream home for life",
    pa: "Browse thousands of properties and find the perfect place",
  },
  {
    img: "/con2.png",
    head: "Pre-Approved Loan $1 to $5",
    pa: "Get pre-approved quickly and know your budget",
  },
  {
    img: "/con3.png",
    head: "Commission free for life",
    pa: "Save thousands with our commission-free model",
  },
];
