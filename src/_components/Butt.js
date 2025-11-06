import { cn } from "@/_utils/cn";

export const Butt = (props) => {
  return (
    <div
      //   className={` bg-[#FF6900] flex justify-center items-center rounded-lg text-white h-9 px-4 ${props.size}`}
      className={cn(
        "bg-[#FF6900] flex justify-center items-center rounded-lg text-white h-9 px-4",
        props.size
      )}
    >
      {props.text}
    </div>
  );
};
