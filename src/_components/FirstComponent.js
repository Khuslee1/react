export const First = (props) => {
  return (
    <div className="h-full w-1/3 rounded-[14px] border border-[#0000001A] flex items-center gap-9 p-[25px] flex-col">
      <div className="h-12 w-12 rounded-full bg-[#FFEDD4] flex justify-center items-center">
        <img className="h-6 w-6" src={props.img} />
      </div>
      <p className="font-sans text-4 font-normal">{props.head}</p>
      <p className="font-sans text-[14px] font-normal text-[#4A5565] text-center">
        {props.p}
      </p>
    </div>
  );
};
