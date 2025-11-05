export const CataComponent = (props) => {
  return (
    <div className="flex flex-col gap-4 w-[296px] h-40">
      <p className="font-sans text-4">{props.head}</p>
      <div className="flex flex-col gap-2">
        <p className="font-sans text-4 text-[#4A5565]">{props.arr[0]}</p>
        <p className="font-sans text-4 text-[#4A5565]">{props.arr[1]}</p>
        <p className="font-sans text-4 text-[#4A5565]">{props.arr[2]}</p>
        <p className="font-sans text-4 text-[#4A5565]">{props.arr[3]}</p>
      </div>
    </div>
  );
};
