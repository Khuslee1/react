import { CataComponent } from "@/_components/CataComponent";

export const SeventhSection = () => {
  return (
    <div className="w-full h-[342px] flex flex-col justify-center items-center gap-8">
      <div className="w-7xl h-40 flex gap-8">
        {cata.map((item, i) => {
          return <CataComponent key={i} head={item.head} arr={item.arr} />;
        })}
      </div>
      <div className="w-7xl h-[53px] flex justify-between items-center border border-t-[#0000001A] border-white">
        <p className="font-sans text-[14px] text-[#4A5565]">
          © 2024 Real Estate Co. All rights reserved.
        </p>
        <p className="font-sans text-[14px] text-[#4A5565]">
          Privacy Policy &nbsp;&nbsp; Terms of Service
        </p>
      </div>
    </div>
  );
};
const cata = [
  { head: "NEED HELP", arr: ["Contact Us", "FAQ", "Support", ""] },
  { head: "COMPANY", arr: ["About Us", "Careers", "Blog", "Press"] },

  { head: "QUICK LINKS", arr: ["Buy", "Sell", "Rent", "Mortgage"] },
  { head: "FOLLOW", arr: ["Facebook", "Twitter", "Instagram", "LinkedIn"] },
];
