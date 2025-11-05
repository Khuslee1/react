export const SecondComponent = (props) => {
  return (
    <div className="w-[624px] h-[107px] px-5 flex gap-8">
      <div className="h-10 w-10 rounded-full flex justify-center items-center border-2 border-[#FF6900] text-[#FF6900]">
        {props.num}
      </div>
      <div className="h-28 w-lg flex flex-col gap-4 ">
        <h1 className="font-sans font-medium text-lg">{props.head}</h1>
        <p className="font-sans font-normal text-base text-[#4A5565]">
          {props.p}
        </p>
      </div>
    </div>
  );
};
