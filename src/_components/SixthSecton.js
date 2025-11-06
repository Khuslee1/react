import { Butt } from "@/_components/Butt";
import { Header } from "@/_components/Header";

export const SixthSection = () => {
  return (
    <div className="w-full h-[260px] bg-[#101828] flex flex-col py-10 gap-6 items-center">
      <Header
        head={[" The Only Market Update", "You'll Actually Want to Read"]}
        text={
          "Get weekly insights on the real estate market, new listings, and expert tips delivered to your inbox"
        }
        tex={"text-16px text-[#99A1AF]"}
        title={"text-16px text-white"}
      />
      <div className="flex gap-3">
        <div className="w-[305.4px] h-9 px-2 py-1 bg-white rounded-lg border border-[#00000000] font-sans text-[#717182] text-[14px] flex items-center">
          Enter your email
        </div>
        <Butt text="Subscribe" size="text-[14px] px-7" />
      </div>
    </div>
  );
};
