export const MapComponent = (props) => {
  return (
    <div className="h-full w-1/3 flex flex-col gap-2 items-center px-10">
      <div className="h-16 w-16 flex items-center justify-center bg-[#101828] rounded-full">
        <img className="h-8 w-8" src={props.img} />
      </div>
      <p className="font-sans text-[16px]">{props.head}</p>
      <p className="font-sans text-[14px] text-[#4A5565] text-center">
        {props.pa}
      </p>
    </div>
  );
};
