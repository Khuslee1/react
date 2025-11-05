export const Sold = (props) => {
  return (
    <div className="w-[302px] h-[390px] border border-[#0000001A] rounded-[14px] flex flex-col gap-6">
      <img
        className="rounded-t-[14px] object-cover h-64 w-full"
        src={props.img}
      />
      <div className="flex flex-col gap-1 px-4 pt-4 items-center">
        <h1 className="font-sans text-base">{props.name}</h1>
        <p className="font-sans text-[14px] text-[#4A5565]">{props.occ}</p>
        <p className="font-sans text-[14px] text-[#FF6900]">
          {props.sold} Properties Sold
        </p>
      </div>
    </div>
  );
};
